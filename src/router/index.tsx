import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from '@components/layout'
import Home from '@views/home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />}>
                    <Route index element={<Home />}></Route>
                    {/* <Route path='/user' element={<User />}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router
