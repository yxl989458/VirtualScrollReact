/* eslint-disable react-hooks/rules-of-hooks */
import AnswerMessage from "../../components/Answer/AnswerMessage"
import SourceList from "../../components/Source/SourceList"
import TitleBlock from "../../components/TitleBlock"
import UserMessage from "../../components/UserMessage"
import { memo, useEffect, useRef, useState } from "react"
import 'highlight.js/styles/atom-one-light.css'
import AnswerMessageFooter from "@components/Answer/AnswerMessageFooter"
import { v4 as uuidV4 } from "uuid"
import { chatHistroyType, generateChatHistroyDefault } from "@stores/modules/chatHistroy"
import { usePropertyRemoteMarkdown } from "@hooks/usePropertyRemoteMarkdown"
import SourceListSkeleton from "@components/Source/SourceListSkeleton"
import { chatQaRequestWithReader, getChatRecord, getChatSource } from "@api/chat"
import { useStreamRead } from "@hooks/useStreamRead"
import autoAnimate from '@formkit/auto-animate'
import { useParams, useSearchParams } from "react-router-dom"

const App = () => {
  const { id: routerId } = useParams()
  const [searchParams] = useSearchParams()
  const [outputValue, setOutputValue] = useState('')
  const [isReload, setIsReload] = useState(false)

  useEffect(() => {
    if (searchParams.get('question')) {
      // sendQuestion(searchParams.get('question')!)
      inputSendMessage(searchParams.get('question')!, routerId!)
    }
  }, [searchParams.get('question')])

  const [chatHistroy, setChatHistroy] = useState<chatHistroyType[]>([])

  async function renderMd(conversation_uuid: string) {
    const AnswerMessageFormat = ((await PropertyRemoteMarkdown).mdRender(outputValue, chatHistroy[chatHistroy.length - 1]?.sourceList))
    if (conversation_uuid) {
      updateChatHistroyFieldsByConversationUuid(conversation_uuid, 'AnswerMessage', AnswerMessageFormat)
    }
    updateChatHistroyLast('AnswerMessage', AnswerMessageFormat)
  }

  useEffect(() => {
    if (!chatHistroy.length && !outputValue) return
    if (isReload) {
      renderMd(routerId!)
    } else {
      renderMd('')
    }
  }, [outputValue])
  const [PropertyRemoteMarkdown, setPropertyRemoteMarkdown] = useState(async () => await usePropertyRemoteMarkdown())
  const containerRef = useRef<HTMLDivElement>(null)
  async function requestQa(inputVal: string, isReload: boolean = false, conversation_uuid: string, reloadUuid?: string,) {
    try {
      const reader = await chatQaRequestWithReader({ conversation_uuid, ask_type: "single_file", llm_type: "1", question: inputVal, force_regenerate: !!reloadUuid })
      getSourceListByUuid(conversation_uuid, isReload)
      const { streamRead } = useStreamRead(reader)
      streamRead(async (output: string) => {
        setOutputValue(output)
        // const AnswerMessageFormat = (await PropertyRemoteMarkdown).mdRender(output, chatHistroy[chatHistroy.length - 1]?.sourceList)
        if (isReload && reloadUuid) {
          setIsReload(true)
          return
        }
        // updateChatHistroyLast('AnswerMessage', AnswerMessageFormat)
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

  const inputSendMessage = async (val: string, randomStr: string) => {
    const { data: { gen_successed } } = await getChatRecord(randomStr!, val)
    if (gen_successed) {
      return
    }
    setChatHistroy((chatHistroyList) => [...chatHistroyList, { ...generateChatHistroyDefault(), userMessage: val, conversationUuid: randomStr }])
    requestQa(val, false, randomStr)
  }
  const getSourceListByUuid = async (uuidP: string, isReload: boolean = false) => {
    try {
      const { data } = await getChatSource(uuidP)
      if (data === null) getSourceListByUuid(uuidP)
      else {
        if (isReload) {
          const sourceList = data.map((item) => ({ ...item, id: uuidV4() }))
          updateChatHistroyFieldsByConversationUuid(uuidP, 'loadingSource', false)
          updateChatHistroyFieldsByConversationUuid(uuidP, 'sourceList', sourceList)
          return
        }
        updateChatHistroyLast('loadingSource', false)
        const sourceList = data.map((item) => ({ ...item, id: uuidV4() }))
        updateChatHistroyLast('sourceList', sourceList)
        return
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
    await requestQa(chatHistroyRes!.userMessage, true, chatHistroyRes!.conversationUuid, updateUuid)
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
    if (!searchParams.get('isGetUserRecord') && !routerId) return
    searchParams.get('isGetUserRecord') && getChatRecordRequest(routerId!)
  }, [searchParams.get('isGetUserRecord'), routerId])


  async function getChatRecordRequest(uuid: string) {
    const { data } = await getChatRecord(uuid)
    // if (!data.gen_successed) return
    const defaultChat = generateChatHistroyDefault()
    const sourceList = data.ref_links.length === 0 ? [] : data.ref_links.map((item) => ({ ...item, id: uuidV4() }))
    const AnswerMessageFormatMarkdown = (await PropertyRemoteMarkdown).mdRender(data.gen_text, sourceList)
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
      {/* {<InputTextear loading={false} inputSendMessage={
        (val) => {
          const randomStr = generateRandomString()
          inputSendMessage(val, randomStr)
        }} />} */}

    </>)
}

export default memo(App)
