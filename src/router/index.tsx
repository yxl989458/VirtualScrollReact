import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from '@components/layout'
import Home from '@views/home'
import { useAuthState } from '@stores/modules/auth'
import { useOpenlogin } from '@hooks/useOpenLogin'
import LoginTripartite from '@views/login/loginTripartite'




const Router = () => {
    const { token } = useAuthState()
    const searchParams = new URLSearchParams(window.location.search)
    const code = searchParams.get('code')
    if (code && !token) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/loginTripartite' element={<LoginTripartite />}></Route>
                </Routes>
            </BrowserRouter>
        )
    } else if (token) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/loginTripartite' element={<LoginTripartite />}></Route>
                    <Route path='/' element={<Content />}>
                        <Route index element={<Home />}></Route>
                        <Route path='/search/:id' element={<Home />}></Route>
                        {/* <Route path='/user' element={<User />}></Route> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOpenlogin()
    }

}

export default Router
