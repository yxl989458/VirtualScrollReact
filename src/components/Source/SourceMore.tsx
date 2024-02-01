import { Avatar } from "@nextui-org/react"
import { useState } from "react"

type SourceMoreProps = {
    clickSourceMore: () => void
}
const SourceMore = ({ clickSourceMore }: SourceMoreProps) => {
    const [isShow, setIsShow] = useState(true)
    const clickSourceMoreHandler = () => {
        clickSourceMore()
        setIsShow(false)
    }
    return (
        <>
            {
                isShow &&
                (<div onClick={clickSourceMoreHandler} className="bg-offset hover:bg-[#e8e8e3]  flex flex-col  justify-between      w-full  h-[96px] p-3   rounded-md">
                    <div className="flex flex-wrap gap-3 items-center">
                        <Avatar className="w-8 h-8" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar className="w-8 h-8" name="Junior" />
                        <Avatar className="w-8 h-8" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar className="w-8 h-8" name="Jane" />
                        <Avatar className="w-8 h-8" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    </div>
                    <div className="text-base font-bold">View 2 more</div>
                </div>)
            }

        </>
    )
}

export default SourceMore
