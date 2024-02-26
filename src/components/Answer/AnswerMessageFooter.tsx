import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Tooltip } from "@nextui-org/react"
import { chatHistroyType } from "@stores/modules/chatHistroy"
import { Copy } from "@utils/copy"
import { useState } from "react"

type AnswerMessageFooter = {
    chatHistroy: chatHistroyType
    reloadChat: (uuid: string) => void

}
const AnswerMessageFooter = ({ chatHistroy, reloadChat }: AnswerMessageFooter) => {
    const [copyDone, setCopyDone] = useState(false)
    const [reloadDone, setReloadDone] = useState(false)
    function CopyHandler() {
        Copy(chatHistroy.originalAnswerMessage!)
        // navigator.clipboard.writeText(chatHistroy.AnswerMessage)
        setCopyDone(true)
        setTimeout(() => {
            setCopyDone(false)
        }, 800)
    }
    function reloadChatHandler() {
        reloadChat(chatHistroy.uuid)
        setReloadDone(true)
        setTimeout(() => {
            setReloadDone(false)
        }, 800)
    }
    return (
        <div className="flex items-center justify-between mt-5">
            <div className="flex md:gap-5  items-center ">
                {/* <Tooltip content="Copy Link" className="text-xl font-bold">
                    <Button className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon icon="material-symbols:share-outline" width={24} height={24} />}>
                        Share
                    </Button>
                </Tooltip> */}
                <Tooltip content="Rewrite This Answer" className="text-xl font-bold">
                    <Button onClick={reloadChatHandler} className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon color="#999" className={reloadDone ? 'animate-spin' : ''} icon="material-symbols:autorenew-outline-rounded" width={24} height={24} />}>
                        <span className="text-[#999]">Rewrite</span>
                    </Button>
                </Tooltip>
                <Tooltip content="Copy" className="md:text-xl md:font-bold">
                    {
                        copyDone ?

                            <Button className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon color="#999" icon="lucide:copy-check" width={24} height={24} />}>
                                <span className="text-[#999]">Copy Done</span>
                            </Button>
                            // <Button variant="light" isIconOnly startContent={<Icon icon="lucide:copy-check" width={24} height={24} />}>
                            // </Button> 
                            :
                            // <Button onClick={CopyHandler} variant="light" isIconOnly startContent={<Icon icon="lucide:copy" width={24} height={24} />}>
                            // </Button>
                            <Button onClick={CopyHandler} className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon icon="lucide:copy" width={24} color="#999" height={24} />}>
                                <span className="text-[#999]">Copy</span>
                            </Button>
                    }
                </Tooltip>
            </div>
            <div className="flex md:gap-4">
                {/* <Tooltip content="Inaccurate or unhelpful" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="iconamoon:dislike-duotone" width={24} height={24} />}>
                    </Button>
                </Tooltip> */}
                {/* <Tooltip content="View Sources" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="material-symbols:calendar-view-week-outline" width={24} height={24} />}>
                    </Button>
                </Tooltip>    */}
                {/* <Tooltip content="Copy" className="md:text-xl md:font-bold">
                    {
                        copyDone ?
                            <Button variant="light" isIconOnly startContent={<Icon icon="lucide:copy-check" width={24} height={24} />}>
                            </Button> :
                            <Button onClick={CopyHandler} variant="light" isIconOnly startContent={<Icon icon="lucide:copy" width={24} height={24} />}>
                            </Button>
                    }


                </Tooltip> */}
                {/* <Tooltip content="Edit Query" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="material-symbols:edit-calendar-outline" width={24} height={24} />}>
                    </Button>
                </Tooltip> */}
            </div>
        </div>
    )
}

export default AnswerMessageFooter
