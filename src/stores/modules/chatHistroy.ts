import type { Source } from '@/types/source'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


type chatHistroyList = {
    sourceList: Source[]
    AnswerMessage: string
    uuid: string,
    userMessage: string
    loadingAnswer?: boolean
    loadingSource?: boolean
}
export const chatHistroyListDefault: chatHistroyList = {
    sourceList: [],
    uuid: v4(),
    userMessage: '',
    AnswerMessage: '',
    loadingAnswer: true,
    loadingSource: true
}
interface chatHistroyState {
    chatHistroyList: chatHistroyList[] | []
    setChatHistroyList: (chatHistroyList: chatHistroyList) => void
    updateChatHistroyListLast: (chatHistroyList: chatHistroyList) => void
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
}

const useChatHistroyState = create<chatHistroyState>()(
    devtools(
        persist(
            (set, get) => ({
                chatHistroyList: [],
                setChatHistroyList: (chatHistroyList: chatHistroyList) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, chatHistroyList] })),
                getChatHistroyList: () => get().chatHistroyList,
                updateChatHistroyListLast: (chatHistroyList: chatHistroyList) => set((state) => ({ chatHistroyList: [...state.chatHistroyList.slice(0, state.chatHistroyList.length - 1), chatHistroyList] })),
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
            }),
            {

                name: 'chatHistroyStorage',
            },
        ),
    ),
)
export default useChatHistroyState
