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
import { chatQaRequestWithReader, getChatRecord, getChatSource } from "@api/chat"
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
  async function requestQa(inputVal: string, isReload: boolean = false, conversation_uuid: string, randomStr: string, isGetUserRecord: boolean, reloadUuid?: string,) {
    try {
      const reader = await chatQaRequestWithReader({ conversation_uuid, ask_type: "single_file", llm_type: "1", question: inputVal })
      navigate(`/search/${randomStr}?isGetUserRecord=${isGetUserRecord}`)
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

  const inputSendMessage = async (val: string) => {
    const randomStr = generateRandomString()
    const { data: { gen_successed } } = await getChatRecord(randomStr!, val)
    if (gen_successed) return
    setChatHistroy((chatHistroyList) => [...chatHistroyList, { ...generateChatHistroyDefault(), userMessage: val, conversationUuid: randomStr }])
    requestQa(val, false, randomStr, randomStr,true)
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
    await requestQa(chatHistroyRes!.userMessage, true, chatHistroyRes!.conversationUuid!, routerId!,false, updateUuid)
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
  useEffect(() => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }, [containerRef.current])
  useEffect(() => {
    if (!routerId) {
      setChatHistroy([])
      return
    }
    routerId && getChatRecordRequest(routerId)
  }, [routerId])
  async function getChatRecordRequest(uuid: string) {
    const { data } = await getChatRecord(uuid)
    if (!data.gen_successed) return
    const defaultChat = generateChatHistroyDefault()
    const sourceList = data.ref_links.map((item) => ({ ...item, id: uuidV4() }))
    const AnswerMessageFormatMarkdown = (await PropertyRemoteMarkdown).mdRender(data.gen_text)
    const insert: Array<chatHistroyType> = [{ ...defaultChat, loadingAnswer: false, loadingSource: false, conversationUuid: data.uuid, AnswerMessage: AnswerMessageFormatMarkdown, userMessage: data.prompt, sourceList }]
    setChatHistroy(insert)
    setPropertyRemoteMarkdown(async () => await usePropertyRemoteMarkdown())
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
      {!routerId && <InputTextear loading={false} inputSendMessage={inputSendMessage} />}

    </>)
}

export default memo(App)
