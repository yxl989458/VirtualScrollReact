import { loginTripartiteApi } from "@api/login";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface authState {
    token: string | null
    getToken: () => string | null
    setToken: (token: string) => void
    loginTripartite: (code: string | null) => void
}
export const useAuthState = create<authState>()(
    devtools(
        persist(
            (set, get) => ({
                token: null,
                getToken: () => get().token,
                setToken: (token: string) => set({ token }),
                loginTripartite: async (code: string | null) => {
                    const { data } = await loginTripartiteApi(code)
                    get().setToken(data.jwt)
                }
            }),
            {
                name: 'auth',
            },

        ),
    ),
)
