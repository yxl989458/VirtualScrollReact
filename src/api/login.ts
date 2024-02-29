import { POST } from "@services";



export const loginTripartiteApi = (code:string|null, state = 'casdoor') => POST<{jwt:string}>('/user_auth', { code, state })
