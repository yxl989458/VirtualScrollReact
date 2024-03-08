import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from '@components/layout'
import Chat from '@views/chat'
import LoginTripartite from '@views/login/loginTripartite'
import Home from '@views/home'




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/loginTripartite' element={<LoginTripartite />}></Route>
                <Route path='/' element={<Content />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/search/:id' element={<Chat />}></Route>
                    {/* <Route path='/user' element={<User />}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Router
