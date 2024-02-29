import { Icon } from "@iconify/react/dist/iconify.js"

const List = () => {
    return (
        <>
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
                        <p className="text-sm truncate text-[#828282]">宗庆后如何创立娃哈哈</p>
                        <p className="text-sm  truncate text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="text-sm  truncate text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="text-sm text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="truncate  text-[#828282] text-sm">介绍下python pickle模块介绍下python pickle模块...</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Icon icon="pepicons-pop:menu" width={30} height={30} color="#828282" />
                    <span className="text-[#828282] font-bold">知识库</span>
                </div>
                <div className="pl-4 py-1">
                    <div className="border-l-2 px-2 border-[#cccccc]  flex flex-col gap-4">
                        <p className="text-sm  truncate text-[#828282]">宗庆后如何创立娃哈哈</p>
                        <p className="text-sm truncate text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="text-sm  truncate text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="text-sm  truncate text-[#828282]">淮海战役伤亡人数是多少</p>
                        <p className="truncate  text-[#828282] text-sm">介绍下python pickle模块介绍下python pickle模块...</p>
                    </div>
                </div>
            </main>
        </>
    )

}


export default List
