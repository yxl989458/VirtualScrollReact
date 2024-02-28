import { useAppState } from "@stores/modules/app"
import List from "./List"
import Footer from "./Footer"
const Sider = () => {
    const { setSiderCollapsed } = useAppState()
    const clickMaskhandler = () => {
        setSiderCollapsed(false)
    }
    return (
        <div onClick={clickMaskhandler} className="fixed transition  [z-index:99] left-0 top-0 right-0 bottom-0  bg-gray-500/30">
            <aside className=" left-0 top-0 bottom-0 w-[200px] [z-index:100] h-full px-2 py-4 bg-[#f5f5f5] ">
                <section><List /></section>
            </aside>
        </div>
    )
}

export default Sider
