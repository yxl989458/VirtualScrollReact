/* eslint-disable react-hooks/rules-of-hooks */
import AnswerMessage from "./components/Answer/AnswerMessage"
import SourceList from "./components/Source/SourceList"
import TitleBlock from "./components/TitleBlock"
import UserMessage from "./components/UserMessage"
import { useRef, useState } from "react"
import 'highlight.js/styles/atom-one-light.css'
import AnswerMessageFooter from "@components/Answer/AnswerMessageFooter"
import InputTextear from "@components/Input"
import { v4 as uuidV4 } from "uuid"
import useChatHistroyStore, { chatHistroyListDefault } from "@stores/modules/chatHistroy"
import { usePropertyRemoteMarkdown } from "@hooks/usePropertyRemoteMarkdown"
import SourceListSkeleton from "@components/Source/SourceListSkeleton"
import { RESPONSEERRORMESSAGE } from "@constants/errMessage"
import { chatQaRequestWithReader, getChatSource } from "@api/chat"
import { useStreamRead } from "@hooks/useStreamRead"
const App = () => {
  const { chatHistroyList, setChatHistroyList, updateChatHistroySourceListByUuid,
    updateChatHistroyAnswerMessageByUuid,
    updateChatHistroyLoadingAnswerByUuid,
    updateChatHistroyLoadingSourceByUuid,updateChatHistroyOriginalAnswerMessageByUuid,updateChatHistroyOriginalAnswerMessageLast, getChatHistroyByUuid, updateAnswerMessageLast, updateSourceListLast, updateLoadingAnswer, updateLoadingSourceLast } = useChatHistroyStore()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [PropertyRemoteMarkdown,setPropertyRemoteMarkdown] = useState(async () => await usePropertyRemoteMarkdown())
  const [uuid, setUuid] = useState(uuidV4())
  const containerRef = useRef<HTMLDivElement>(null)
  async function requestQa(inputVal: string, isReload: boolean = false, reloadUuid?: string) {
    try {
      const reader = await chatQaRequestWithReader({ conversation_uuid: uuid, ask_type: "single_file", llm_type: "1", question: inputVal })
      getSourceListByUuid(reloadUuid || uuid, isReload)
      const { streamRead } = useStreamRead(reader)
      streamRead(async (output: string) => {
        const AnswerMessageFormat = (await PropertyRemoteMarkdown).mdRender(output)
        if (isReload && reloadUuid) {
          updateChatHistroyOriginalAnswerMessageByUuid(AnswerMessageFormat, reloadUuid)
          return updateChatHistroyAnswerMessageByUuid(AnswerMessageFormat, reloadUuid)
        }
        updateAnswerMessageLast(AnswerMessageFormat)
        updateChatHistroyOriginalAnswerMessageLast(output)
      }, (isDone: boolean) => {
        if (isDone) {
          if (isReload && reloadUuid) {
            updateChatHistroyLoadingAnswerByUuid(false, reloadUuid)
          }
          setUuid(uuidV4())
          updateLoadingAnswer(false)
          setPropertyRemoteMarkdown(async () => await usePropertyRemoteMarkdown())
          return
        }
      })
    } catch (error) {
      updateLoadingAnswer(false)
      updateLoadingSourceLast(false)
      updateSourceListLast([])
      updateAnswerMessageLast(RESPONSEERRORMESSAGE[500])
    }
  }

  const inputSendMessage = async (val: string) => {
    await setChatHistroyList({
      ...chatHistroyListDefault,
      uuid,
      userMessage: val
    })
    updateLoadingSourceLast(true)
    updateLoadingAnswer(true)
    requestQa(val)
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }
  const getSourceListByUuid = async (uuidP: string,isReload: boolean = false) => {
    try {
      const { data } = await getChatSource(uuidP)
      if (data === null) getSourceListByUuid(uuidP)
      else {
        updateLoadingSourceLast(false)
        if(isReload){
        updateChatHistroyLoadingSourceByUuid(false, uuidP)
        updateChatHistroySourceListByUuid(data.map((item) => ({ ...item, id: uuidV4() })), uuidP)
        setUuid(uuidV4())
        return
        }
        updateSourceListLast(data.map((item) => ({ ...item, id: uuidV4() })))
        setUuid(uuidV4())
      }
    } catch (error) {
      updateLoadingSourceLast(false)
      updateSourceListLast([])
      return
    }
  }
  const reloadChat = async (updateUuid: string) => {
    updateChatHistroyAnswerMessageByUuid("", updateUuid)
    updateChatHistroyLoadingAnswerByUuid(true, updateUuid)
    updateChatHistroyLoadingSourceByUuid(true, updateUuid)
    updateChatHistroySourceListByUuid([], updateUuid)
    await requestQa(getChatHistroyByUuid(updateUuid)!.userMessage, true, updateUuid)
  }
  return (<>
    <div ref={containerRef} className="flex justify-center flex-col items-center">
      <div className="bg-[#fcfcf9] pb-44 xl:w-[75rem] md:w-[50rem] min-h-screen w-[400px] sm:w-[28rem]" >
        {
          chatHistroyList.map((item, index) => (<div className="bg-[#fcfcf9] p-5 pb-10    border-b-2" key={index}>
            <UserMessage message={item.userMessage} />
            {/* <AccordionCom /> */}
            <TitleBlock icon="material-symbols:format-align-right-rounded" text="Source" />
            {
              item.loadingSource ? <SourceListSkeleton /> : <SourceList sourceList={item.sourceList} />
            }
            {
              item.loadingAnswer ? <TitleBlock icon="wi:moon-alt-waning-crescent-2" text="Answer" loading /> : <TitleBlock icon="material-symbols:format-align-left" text="Answer" />
            }
            <AnswerMessage message={item.AnswerMessage} />
            <AnswerMessageFooter reloadChat={reloadChat} chatHistroy={item} key={index} />
          </div>))
        }
        <InputTextear inputSendMessage={inputSendMessage} />
      </div>

    </div>
  </>)
}

export default App
