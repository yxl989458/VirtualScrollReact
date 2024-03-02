import { useAppState } from "@stores/modules/app"
import List from "../components/List"
import Footer from "../components/Footer"
import { UserSearchRecords } from "@/types/Apichat"
interface siderProps {
    userSearchRecords: UserSearchRecords[]
}
const Sider = ({userSearchRecords}:siderProps) => {
    const { setSiderCollapsed } = useAppState()
    const clickMaskhandler = () => {
        setSiderCollapsed(false)
    }
    return (
        <div onClick={clickMaskhandler} className="fixed transition  [z-index:99] left-0 top-0 right-0 bottom-0  bg-gray-500/30">
            <aside className="relative left-0 top-0 bottom-0 w-[220px] [z-index:100] h-full  py-4 bg-[#f5f5f5] ">
                <section className="px-2"><List userSearchRecords={userSearchRecords} /></section>
                <Footer />
            </aside>
        </div>
    )
}

export default Sider
