import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Tooltip } from "@nextui-org/react"

const AnswerMessageFooter = () => {
    return (
        <div className="flex items-center justify-between mt-5">
            <div className="flex md:gap-5  items-center ">
                <Tooltip content="Copy Link" className="text-xl font-bold">
                    <Button className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon icon="material-symbols:share-outline" width={24} height={24} />}>
                        Share
                    </Button>
                </Tooltip>
                <Tooltip content="Rewrite This Answer" className="text-xl font-bold">
                    <Button className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon icon="material-symbols:autorenew-outline-rounded" width={24} height={24} />}>
                        Rewrite
                    </Button>
                </Tooltip>
            </div>
            <div className="flex md:gap-4">
                <Tooltip content="Inaccurate or unhelpful" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="iconamoon:dislike-duotone" width={24} height={24} />}>
                    </Button>
                </Tooltip>
                <Tooltip content="View Sources" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="material-symbols:calendar-view-week-outline" width={24} height={24} />}>
                    </Button>
                </Tooltip>   <Tooltip content="Copy" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="material-symbols:content-copy-outline" width={24} height={24} />}>
                    </Button>
                </Tooltip>
                <Tooltip content="Edit Query" className="md:text-xl md:font-bold">
                    <Button variant="light" isIconOnly startContent={<Icon icon="material-symbols:edit-calendar-outline" width={24} height={24} />}>
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default AnswerMessageFooter
