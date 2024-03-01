/* eslint-disable react-hooks/rules-of-hooks */
import AnswerMessage from "../../components/Answer/AnswerMessage"
import SourceList from "../../components/Source/SourceList"
import TitleBlock from "../../components/TitleBlock"
import UserMessage from "../../components/UserMessage"
import { memo, useEffect, useRef, useState } from "react"
import 'highlight.js/styles/atom-one-light.css'
import AnswerMessageFooter from "@components/Answer/AnswerMessageFooter"
import InputTextear from "@components/Input"
import { v4 as uuidV4 } from "uuid"
import { chatHistroyType, generateChatHistroyDefault } from "@stores/modules/chatHistroy"
import { usePropertyRemoteMarkdown } from "@hooks/usePropertyRemoteMarkdown"
import SourceListSkeleton from "@components/Source/SourceListSkeleton"
import { chatQaRequestWithReader, getChatSource } from "@api/chat"
import { useStreamRead } from "@hooks/useStreamRead"
import autoAnimate from '@formkit/auto-animate'
import { generateRandomString } from "@utils/randomStr"
import { useNavigate, useParams } from "react-router-dom"
const App = () => {
  const { id: routerId } = useParams()
  const [chatHistroy, setChatHistroy] = useState<chatHistroyType[]>([])
  const navigate = useNavigate()
  const [PropertyRemoteMarkdown, setPropertyRemoteMarkdown] = useState(async () => await usePropertyRemoteMarkdown())
  const containerRef = useRef<HTMLDivElement>(null)
  async function requestQa(inputVal: string, isReload: boolean = false, conversation_uuid: string, reloadUuid?: string,) {
    try {
      const reader = await chatQaRequestWithReader({ conversation_uuid, ask_type: "single_file", llm_type: "1", question: inputVal })
      getSourceListByUuid(conversation_uuid, isReload)
      const { streamRead } = useStreamRead(reader)
      streamRead(async (output: string) => {
        const AnswerMessageFormat = (await PropertyRemoteMarkdown).mdRender(output)
        if (isReload && reloadUuid) {
          updateChatHistroyFieldsByUuid(reloadUuid, 'AnswerMessage', AnswerMessageFormat)
          return
        }
        updateChatHistroyLast('AnswerMessage', AnswerMessageFormat)
      }, (isDone: boolean) => {
        if (isDone) {
          if (isReload && reloadUuid) {
            updateChatHistroyFieldsByUuid(reloadUuid, 'loadingAnswer', false)
          }
          updateChatHistroyLast('loadingAnswer', false)
          setPropertyRemoteMarkdown(async () => await usePropertyRemoteMarkdown())
          return
        }
      })
    } catch (error) {
      throw new Error(error as string)
    }
  }
  useEffect(() => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }, [containerRef.current])
  const inputSendMessage = async (val: string) => {
    const conversationUuid = routerId || generateRandomString()
    //TODO: 根据conversationUuid 请求接口getChatRecord 判断是否有历史记录 如果有进行下一步操作 未知 需讨论
    navigate(`/search/${conversationUuid}`)
    // const { data: { gen_successed } } = await getChatRecord(conversationUuid, val)
    setChatHistroy((chatHistroyList) => [...chatHistroyList, { ...generateChatHistroyDefault(), userMessage: val, conversationUuid }])
    requestQa(val, false, conversationUuid)
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }
  const getSourceListByUuid = async (uuidP: string, isReload: boolean = false) => {
    try {
      const { data } = await getChatSource(uuidP)
      if (data === null) getSourceListByUuid(uuidP)
      else {
        if (isReload) {
          updateChatHistroyFieldsByConversationUuid(uuidP, 'loadingSource', false)
          updateChatHistroyFieldsByConversationUuid(uuidP, 'sourceList', data.map((item) => ({ ...item, id: uuidV4() })))
          return
        }
        updateChatHistroyLast('loadingSource', false)
        updateChatHistroyLast('sourceList', data.map((item) => ({ ...item, id: uuidV4() })))
      }
    } catch (error) {
      throw new Error(error as string)

    }
  }
  const reloadChat = async (updateUuid: string) => {
    updateChatHistroyFieldsByUuid(updateUuid, 'AnswerMessage', '')
    updateChatHistroyFieldsByUuid(updateUuid, 'loadingAnswer', true)
    updateChatHistroyFieldsByUuid(updateUuid, 'loadingSource', true)
    updateChatHistroyFieldsByUuid(updateUuid, 'sourceList', [])
    const chatHistroyRes = chatHistroy.find((item) => item.uuid === updateUuid)
    await requestQa(chatHistroyRes!.userMessage, true, chatHistroyRes!.conversationUuid!, updateUuid)
  }
  const SiderParent = useRef(null)
  useEffect(() => {
    SiderParent.current && autoAnimate(SiderParent.current, {
      easing: 'linear',
      disrespectUserMotionPreference: true
    })
  }, [SiderParent])
  const updateChatHistroyFieldsByUuid = <T extends keyof chatHistroyType>(id: string, fields: T, value: chatHistroyType[T]) => {
    setChatHistroy(chatHistroyList => {
      const index = chatHistroyList.findIndex((item) => item['uuid'] === id)
      chatHistroyList[index][fields] = value
      return [...chatHistroyList]
    })
  }
  const updateChatHistroyFieldsByConversationUuid = <T extends keyof chatHistroyType>(id: string, fields: T, value: chatHistroyType[T]) => {
    setChatHistroy(chatHistroyList => {
      const index = chatHistroyList.findIndex((item) => item['conversationUuid'] === id)
      chatHistroyList[index][fields] = value
      return [...chatHistroyList]
    })
  }
  const updateChatHistroyLast = <T extends keyof chatHistroyType>(fields: T, value: chatHistroyType[T]) => {
    setChatHistroy(chatHistroyList => {
      chatHistroyList[chatHistroyList.length - 1][fields] = value
      return [...chatHistroyList]
    })
  }

  return (
    <>
      {
        chatHistroy.map((item, index) => (<div className="bg-white p-5 pb-10 lg:grid lg:grid-cols-3  gap-10   border-b-2" key={index}>
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <UserMessage message={item.userMessage} />
              {
                item.loadingAnswer ? <TitleBlock icon="wi:moon-alt-waning-crescent-2" text="Answer" loading /> : <TitleBlock icon="material-symbols:format-align-left" text="AI 回答" />
              }
              <AnswerMessage message={item.AnswerMessage} />
            </div>
            <AnswerMessageFooter reloadChat={reloadChat} chatHistroy={item} key={index} />
          </div>
          {/* <AccordionCom /> */}
          <div className="col-span-1">
            <TitleBlock icon="material-symbols:format-align-right-rounded" text="中文引用" />
            {
              item.loadingSource ? <SourceListSkeleton /> : <SourceList sourceList={item.sourceList} />
            }
          </div>
        </div>))
      }
      <InputTextear loading={false} inputSendMessage={inputSendMessage} />
    </>)
}

export default memo(App)
