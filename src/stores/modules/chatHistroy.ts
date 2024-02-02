import type { Source } from '@/types/source'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


type chatHistroyList = {
    sourceList: Source[]
    AnswerMessage: string
    uuid: string,
    loadingAnswer?: boolean
    loadingSource?: boolean
}
export const chatHistroyListDefault: chatHistroyList = {
    sourceList: [],
    uuid: v4(),
    AnswerMessage: 'Hello, I am a ChatGPT Bot. How can I help you today?',
    loadingAnswer: true,
    loadingSource: true
}
interface chatHistroyState {
    chatHistroyList: chatHistroyList[] | []
    setChatHistroyList: (chatHistroyList: chatHistroyList) => void
    updateChatHistroyListLast: (chatHistroyList: chatHistroyList) => void
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
                updateSourceList: (sourceList: Source[]) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], sourceList }] })),
                setAnswerMessage: (AnswerMessage: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], AnswerMessage }] })),
                setUuid: (uuid: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], uuid }] })),
                setLoadingAnswer: (loadingAnswer: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingAnswer }] })),
                setLoadingSource: (loadingSource: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingSource }] })),
                updateAnswerMessage: (AnswerMessage: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], AnswerMessage }] })),
                updateUuid: (uuid: string) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], uuid }] })),
                updateLoadingAnswer: (loadingAnswer: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingAnswer }] })),
                updateLoadingSource: (loadingSource: boolean) => set((state) => ({ chatHistroyList: [...state.chatHistroyList, { ...state.chatHistroyList[state.chatHistroyList.length - 1], loadingSource }] })),
            }),
            {
                name: 'chatHistroyStorage',
            },
        ),
    ),
)
export default useChatHistroyState
