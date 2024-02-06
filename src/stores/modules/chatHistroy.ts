import type { Source } from '@/types/source'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export type chatHistroyType = {
    sourceList: Source[]
    AnswerMessage: string
    uuid: string,
    userMessage: string
    loadingAnswer?: boolean
    loadingSource?: boolean
}
export const chatHistroyListDefault: chatHistroyType = {
    sourceList: [],
    uuid: v4(),
    userMessage: '',
    AnswerMessage: '',
    loadingAnswer: true,
    loadingSource: true
}
interface chatHistroyState {
    chatHistroyList: chatHistroyType[] | []
    setChatHistroyList: (chatHistroyList: chatHistroyType) => void
    updateChatHistroyListLast: (chatHistroyList: chatHistroyType) => void
    setSourceList: (sourceList: Source[]) => void
    updateSourceListLast: (sourceList: Source[]) => void
    setAnswerMessage: (AnswerMessage: string) => void
    setUuid: (uuid: string) => void
    setLoadingAnswer: (loadingAnswer: boolean) => void
    setLoadingSource: (setLoadingSource: boolean) => void
    updateAnswerMessageLast: (AnswerMessage: string) => void
    updateUuid: (uuid: string) => void
    updateLoadingAnswer: (updateLoadingAnswer: boolean) => void
    updateLoadingSourceLast: (loadingSource: boolean) => void
    getChatHistroyLast: () => chatHistroyType,
    getChatHistroyByUuid: (uuid: string) => chatHistroyType | undefined,
    updateChatHistroySourceListByUuid: (chatHistroy: Source[], uuid: string) => void
    updateChatHistroyAnswerMessageByUuid: (AnswerMessage: string, uuid: string) => void
    updateChatHistroyLoadingAnswerByUuid: (LoadingAnswer: boolean, uuid: string) => void
    updateChatHistroyLoadingSourceByUuid: (LoadingSource: boolean, uuid: string) => void
}

const useChatHistroyState = create<chatHistroyState>()(
    devtools(
        persist(
            (set, get) => ({
                chatHistroyList: [],
                getChatHistroyLast: () => get().chatHistroyList[get().chatHistroyList.length - 1],
                getChatHistroyByUuid: (uuid: string) => get().chatHistroyList.find((chatHistroy) => chatHistroy.uuid === uuid),
                setChatHistroyList: (chatHistroyList: chatHistroyType) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, chatHistroyList] })),
                getChatHistroyList: () => get().chatHistroyList,
                updateChatHistroyListLast: (chatHistroyList: chatHistroyType) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), chatHistroyList] })),
                setSourceList: (sourceList: Source[]) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], sourceList }] })),
                updateSourceListLast: (sourceList: Source[]) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), { ...state.chatHistroyList[state.chatHistroyList.length - 1], sourceList }] })),
                setAnswerMessage: (AnswerMessage: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], AnswerMessage }] })),
                setUuid: (uuid: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], uuid }] })),
                setLoadingAnswer: (loadingAnswer: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingAnswer }] })),
                setLoadingSource: (loadingSource: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingSource }] })),
                updateAnswerMessageLast: (AnswerMessage: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), { ...state.chatHistroyList[state.chatHistroyList.length - 1], AnswerMessage }] })),
                updateUuid: (uuid: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], uuid }] })),
                updateLoadingAnswer: (loadingAnswer: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingAnswer }] })),
                updateLoadingSourceLast: (loadingSource: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingSource }] })),
                updateChatHistroySourceListByUuid: (sourceList: Source[], uuid: string) => set((state) => {
                    const index = state.chatHistroyList.findIndex((chatHistroy) => chatHistroy.uuid === uuid)
                    state.chatHistroyList[index].sourceList = sourceList
                    return {
                        chatHistroyList: state.chatHistroyList
                    }
                }),
                updateChatHistroyAnswerMessageByUuid: (AnswerMessage: string, uuid: string) => set((state) => {
                    const index = state.chatHistroyList.findIndex((chatHistroy) => chatHistroy.uuid === uuid)
                    state.chatHistroyList[index].AnswerMessage = AnswerMessage
                    return {
                        chatHistroyList: state.chatHistroyList
                    }
                }),
                updateChatHistroyLoadingAnswerByUuid: (LoadingAnswer: boolean, uuid: string) => set((state) => {
                    const index = state.chatHistroyList.findIndex((chatHistroy) => chatHistroy.uuid === uuid)
                    state.chatHistroyList[index].loadingAnswer = LoadingAnswer
                    return {
                        chatHistroyList: state.chatHistroyList
                    }
                }),
                updateChatHistroyLoadingSourceByUuid: (LoadingSource: boolean, uuid: string) => set((state) => {
                    const index = state.chatHistroyList.findIndex((chatHistroy) => chatHistroy.uuid === uuid)
                    state.chatHistroyList[index].loadingSource =LoadingSource
                    return {
                        chatHistroyList: state.chatHistroyList
                    }
                })

            }),
            {

                name: 'chatHistroyStorage',
            },
        ),
    ),
)
export default useChatHistroyState
