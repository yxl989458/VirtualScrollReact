import autoAnimate from "@formkit/auto-animate"
import { useAppState } from "@stores/modules/app"
import { useEffect, useRef, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { SiderMobile, SiderPC } from ".."
import Header from "@components/Header"
import { getUserSearchRecords } from "@api/chat"
import { UserSearchRecords } from "@/types/Apichat"



const Content = () => {
    const { id: searchId } = useParams()
    const [userSearchRecords, setUserSearchRecords] = useState<UserSearchRecords[]>([])
    useEffect(() => {
        console.log();

        getUserSearchRecordsRequest()
    }, [searchId])
    const getUserSearchRecordsRequest = async () => {
        const { data } = await getUserSearchRecords()
        setUserSearchRecords(() => data)
    }

    const { siderCollapsed } = useAppState()
    const SiderParent = useRef(null)
    useEffect(() => {
        SiderParent.current && autoAnimate(SiderParent.current, {
            easing: 'linear',
            disrespectUserMotionPreference: true
        })
    }, [SiderParent])
    return (
        <div className="flex lg:ml-[300px] justify-center flex-col items-center">
            <div className="bg-white pb-44 xl:w-[75rem] md:w-[50rem] min-h-screen w-[400px] sm:w-[28rem]" >
                {/* Router View */}
                <Header />
                <div ref={SiderParent} >
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

