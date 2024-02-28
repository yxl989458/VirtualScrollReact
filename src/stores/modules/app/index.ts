// import { defineStore } from 'pinia'
// import type { AppState, Language, Theme } from './helper'
// import { getLocalSetting, setLocalSetting } from './helper'
// import { store } from '@/store/helper'

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Language, Theme, setLocalSetting } from "./helper";
import { useBasicLayout } from "@hooks/useBasicLayout";


export interface AppState {
  siderCollapsed: boolean
  theme: Theme
  language: Language,
  isMobile: boolean
  recordState: () => void
  setSiderCollapsed: (collapsed: boolean) => void
  setTheme: (theme: Theme) => void
  setLanguage: (language: Language) => void
}
export const useAppState = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        siderCollapsed: false,
        theme: 'light',
        language: 'zh-CN',
        isMobile: useBasicLayout().isMobile,
        setSiderCollapsed(collapsed: boolean) {
          set({ siderCollapsed: collapsed })
          get().recordState()
        },
        setTheme(theme: Theme) {
          set({ theme })
          get().recordState()
        },
        setLanguage(language: Language) {
          if (this.language !== language) {
            set({ language })
            get().recordState()
          }
        },
        recordState() {
          setLocalSetting(get())
        },
      }),
      {
        name: 'app-storage',
      },
    ),
  ),
)
