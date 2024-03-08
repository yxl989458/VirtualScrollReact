import { useAppState } from "@stores/modules/app"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { SiderMobile, SiderPC } from ".."
import Header from "@components/Header"
import { getUserSearchRecords } from "@api/chat"
import { UserSearchRecords } from "@/types/Apichat"
import eventBus from "@modules/eventBus"



const Content = () => {
    const [userSearchRecords, setUserSearchRecords] = useState<UserSearchRecords[]>([])
    useEffect(() => {

        getUserSearchRecordsRequest()
        eventBus.on('getUserSearchRecords', () => {
            getUserSearchRecordsRequest()
        })
    }, [])


    const getUserSearchRecordsRequest = async () => {
        const { data } = await getUserSearchRecords()
        setUserSearchRecords(() => data)
    }
    const { siderCollapsed } = useAppState()
    // const SiderParent = useRef(null)
    // useEffect(() => {
    //     SiderParent.current && autoAnimate(SiderParent.current, {
    //         easing: 'linear',
    //         disrespectUserMotionPreference: true
    //     })
    // }, [SiderParent])
    return (
        <div className="flex lg:ml-[300px] justify-center flex-col items-center px-1">
            <div className="bg-white m-auto  xl:w-[75rem] md:w-[50rem] min-h-screen w-[400px] sm:w-[28rem]" >
                {/* Router View */}
                <Header />
                <div >
                    {
                        (siderCollapsed && <SiderMobile userSearchRecords={userSearchRecords} />)
                    }
                    <SiderPC userSearchRecords={userSearchRecords} />
                </div>
                <Outlet></Outlet>
            </div >
        </div>
    )

}

export default Content

