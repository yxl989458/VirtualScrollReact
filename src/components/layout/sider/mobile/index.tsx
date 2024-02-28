import { Icon } from "@iconify/react/dist/iconify.js"
import { useAppState } from "@stores/modules/app"
const Sider = () => {
    const { setSiderCollapsed } = useAppState()
    const clickMaskhandler = () => {
        setSiderCollapsed(false)
    }
    return (
        <div onClick={clickMaskhandler} className="fixed transition  [z-index:99] left-0 top-0 right-0 bottom-0  bg-gray-500/30">
            <aside className=" left-0 top-0 bottom-0 w-[200px] [z-index:100] h-full px-2 py-4 bg-[#f5f5f5] ">
                <main className="flex gap-5 flex-col">
                    <div className="flex gap-3 items-center">
                        <Icon icon="mdi:home" width={30} height={30} color="#828282" />
                        <span className="text-[#828282] font-bold">首页</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Icon icon="icon-park-twotone:all-application" width={30} height={30} color="#828282" />
                        <span className="text-[#828282] font-bold">广场</span>
                    </div>
                    <div className="pl-4 py-1">
                        <div className="border-l-2 px-2 border-[#cccccc]  flex flex-col gap-4">
                            <p className="text-sm truncate  text-[#828282]">宗庆后如何创立娃哈哈</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少</p>
                            <p className="truncate text-[#828282] text-sm">介绍下python pickle模块介绍下python pickle模块...</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Icon icon="mdi:home" width={30} height={30} color="#828282" />
                        <span className="text-[#828282] font-bold">知识库</span>
                    </div>
                    <div className="pl-4 py-1">
                        <div className="border-l-2 px-2 border-[#cccccc]  flex flex-col gap-4">
                            <p className="text-sm truncate  text-[#828282]">宗庆后如何创立娃哈哈</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少sdsdsd</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少</p>
                            <p className="text-sm truncate  text-[#828282]">淮海战役伤亡人数是多少</p>
                            <p className="truncate text-[#828282] text-sm">介绍下python pickle模块介绍下python pickle模块...</p>
                        </div>
                    </div>
                </main>
            </aside>
        </div>
    )
}

export default Sider
