/// <reference types="vite/client" />


declare module '@modules/fingerprint' {
    export function load(): Promise<{
        get: () => {
            visitorId:string
        }
    }>
}
