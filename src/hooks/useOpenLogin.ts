export function useOpenlogin() {
    const VITE_APP_BASE_WEB = import.meta.env.VITE_APP_BASE_WEB
    const VITE_APP_BASE_LOGIN_URL = import.meta.env.VITE_APP_BASE_LOGIN_URL
    const VITE_APP_BASE_CLINT_ID = import.meta.env.VITE_APP_BASE_CLINT_ID
    const LoginLink = `${VITE_APP_BASE_LOGIN_URL}/login/oauth/authorize?client_id=${VITE_APP_BASE_CLINT_ID}&response_type=code&redirect_uri=${VITE_APP_BASE_WEB}/loginTripartite&scope=read&state=casdoor`
    window.open(LoginLink, '_self')

}
