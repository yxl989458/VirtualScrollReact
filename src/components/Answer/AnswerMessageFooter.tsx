import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Modal, ModalBody, ModalContent, Tooltip, useDisclosure } from "@nextui-org/react"
import { chatHistroyType } from "@stores/modules/chatHistroy"
import { Copy } from "@utils/copy"
import domToToImage from 'dom-to-image'
import { useState } from "react"
import qrCode from 'qrcode'
type AnswerMessageFooter = {
    chatHistroy: chatHistroyType
    reloadChat: (uuid: string) => void

}
const AnswerMessageFooter = ({ chatHistroy, reloadChat }: AnswerMessageFooter) => {
    const [copyDone, setCopyDone] = useState(false)
    const [reloadDone, setReloadDone] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [shareImg, setShareImg] = useState('')
    function CopyHandler() {
        const plainText = chatHistroy.AnswerMessage.replace(/<[^>]*>/g, '');
        Copy(plainText)
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
    function share() {
        const chatViews = document.getElementById('chatViews')!
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        const { width, height } = chatViews.getBoundingClientRect()
        canvas.width = window.innerWidth + 50
        canvas.height = height + 500
        ctx.fillStyle = '#fff'
        domToToImage.toPng(chatViews, {
            bgcolor: '#fff',
        })
            .then(function (dataUrl: string) {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = dataUrl;
                //图片填充到canvas
                img.onload = function () {
                    ctx.drawImage(img, (canvas.width - width) / 2, 50, width, height);
                    const link = window.location.href
                    qrCode.toDataURL(link, (error, url) => {
                        if (error) throw error
                        const img = new Image();
                        img.src = url;
                        img.onload = function () {
                            ctx.drawImage(img, (canvas.width - img.width) / 2, height + 100, img.width, img.height);
                            canvas.toBlob((blob: Blob | null) => {
                                const url = URL.createObjectURL(blob!);
                                setShareImg(url)
                                onOpen()

                                // const link = document.createElement('a');
                                // link.style.display = 'none';
                                // link.href = url;
                                // link.setAttribute('download', 'image.png');
                                // document.body.appendChild(link);
                                // link.click();
                            })
                        }
                    })
                }
            })
            .catch(function (error: string) {
                console.error('oops, something went wrong!', error);
            });
    }

    return (
        <div className="flex items-center justify-between">
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
                <Tooltip content="Share This Answer" className="text-xl font-bold">
                    <Button onClick={share} className="md:text-xl px-1 md:font-bold" variant="light" startContent={<Icon color="#999" icon="mdi:share-variant" width={24} height={24} />}>
                        <span className="text-[#999]">Share</span>
                    </Button>
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


            <Modal size='xs' isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center' scrollBehavior='inside'>
                <ModalContent>
                    {() => (
                        <>
                            <ModalBody>
                                <img src={shareImg} alt="" />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>



        </div>
    )
}

export default AnswerMessageFooter
