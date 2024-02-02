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
import type { Source } from "@/types/source"
import SourceListSkeleton from "@components/Source/SourceListSkeleton"
const App = () => {
  const { chatHistroyList, setChatHistroyList, updateAnswerMessageLast, updateSourceListLast, updateLoadingAnswer, updateLoadingSourceLast } = useChatHistroyStore()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [PropertyRemoteMarkdown] =useState(async()=>await usePropertyRemoteMarkdown())
  let uuid = uuidV4()
  const containerRef = useRef<HTMLDivElement>(null)
  async function streamWrite(reader: ReadableStreamDefaultReader<Uint8Array>) {
    const textDecoder = new TextDecoder();
    let result = true;
    let output = "";
    while (result) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          result = false;
          uuid = uuidV4()
          updateLoadingAnswer(false)
        }
        const chunkText = textDecoder.decode(value);
        output += chunkText;
        const AnswerMessageFormat = (await PropertyRemoteMarkdown).mdRender(output)
        updateAnswerMessageLast(AnswerMessageFormat)
      } catch (error) {
        console.error(error);
        break
      }
    }
  }
  function requestQa(inputVal: string) {
    fetch('http://ekbapi.opencsg.com:9090/api/search_ask', {
      method: 'POST',
      body: JSON.stringify({
        conversation_uuid: uuid,
        ask_type: "single_file",
        llm_type: "1",
        question: inputVal
      })
    }).then(response => {
      const reader = response!.body!.getReader();
      streamWrite(reader)
    })
  }
  const clickSourceMore = () => {
    // setFirstSourceList(sourceList)
  }
  const inputSendMessage = async (val: string) => {
    await setChatHistroyList({
      ...chatHistroyListDefault,
      userMessage: val
    })
    getSourceListByUuid(uuid)
    updateLoadingSourceLast(true)
    updateLoadingAnswer(true)
    requestQa(val)
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }
  type SourceListApi = {
    snippet: string
    title: string,
    url: string
  }
  const getSourceListByUuid = async (uuid: string) => {
    fetch('http://ekbapi.opencsg.com:9090/api/search_conv_rel_info', {
      method: "post",
      body: JSON.stringify({
        conversation_uuid: uuid
      })
    }).then(async response => {
      const data = await response.json() as { data: SourceListApi[]; code: number }
      if (data.code) {
        getSourceListByUuid(uuid)
        return
      } else {
        updateLoadingSourceLast(false)
        const sourceList = data.data.map((item): Source => {
          return {
            url: item.url,
            desc: item.snippet,
            name: "AnswerAI",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            id: uuidV4()
          }
        })
        updateSourceListLast(sourceList)
      }
    })
  }
  return (<>
    <div ref={containerRef} className="flex justify-center flex-col items-center">
      <div className="bg-[#fcfcf9] pb-44 xl:w-[75rem] md:w-[50rem] min-h-screen sm:w-[37.5rem] " >
        {
          chatHistroyList.map((item, index) => (<div className="bg-[#fcfcf9] p-5 pb-10    border-b-2" key={index}>
            <UserMessage message={item.userMessage} />
            {/* <AccordionCom /> */}
            <TitleBlock icon="material-symbols:format-align-right-rounded" text="Source" />
            {
              item.loadingSource ? <SourceListSkeleton /> : <SourceList sourceList={item.sourceList} clickSourceMore={clickSourceMore} />
            }
            {
              item.loadingAnswer ? <TitleBlock icon="wi:moon-alt-waning-crescent-2" text="Answer" loading /> : <TitleBlock icon="material-symbols:format-align-left" text="Answer" />
            }
            <AnswerMessage message={item.AnswerMessage} />
            <AnswerMessageFooter />
          </div>))
        }
        <InputTextear inputSendMessage={inputSendMessage} />
      </div>

    </div>
  </>)
}

export default App
