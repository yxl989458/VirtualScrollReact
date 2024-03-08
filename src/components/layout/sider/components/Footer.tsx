import { Icon } from "@iconify/react/dist/iconify.js"
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useAuthState } from "@stores/modules/auth"
import { useOpenlogin } from "@hooks/useOpenLogin"


const DropdownMenus = () => {
    const { openLogin } = useOpenlogin()
    const { logout } = useAuthState()
    const logoutHandler = async () => {
        await logout()
        openLogin()
    }

    return (
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="delete" className="text-danger" color='danger' onClick={logoutHandler}>
                退出登录
            </DropdownItem>
        </DropdownMenu>
    )
}

const Footer = () => {
    const { openLogin, openRegister } = useOpenlogin()
    const { getToken } = useAuthState()
    return (
        <footer className="absolute bottom-0 border-t-2 [z-index:101] bg-[#f5f5f5]  py-5 w-full">
            {
                getToken() ? <Dropdown>
                    <div className="flex gap-4 justify-center items-center">
                        <DropdownTrigger>
                            <div className="flex  gap-4 items-center">  <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <span className="text-xl font-bold text-[#828282]">问问用户</span></div>
                        </DropdownTrigger>
                        <Icon icon="ion:ios-settings" width={32} height={32} color="#CCCCCC" />
                    </div>
                    <DropdownMenus />
                </Dropdown>
                    :
                    (
                        <div className="w-full flex justify-center gap-10">
                            <Button  className="bg-gradient-to-tr from-teal-900 to-green-600 text-white shadow-lg" onClick={() => { openLogin() }} variant="light">登录</Button>
                            <Button    className="bg-gradient-to-tr from-orange-500 to-yellow-500 text-white shadow-lg" onClick={() => { openRegister() }} variant="light">注册</Button>
                        </div>
                    )
            }
        </footer>
    )
}

export default Footer
