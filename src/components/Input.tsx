import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { memo, useEffect, useRef, useState } from "react";
import { Input } from 'antd'
import ConfigProvider from "antd/es/config-provider";
interface InputTextearProps {
    inputSendMessage: (val: string) => void
    loading?: boolean
    value: string
    setEditUserMessage: React.Dispatch<React.SetStateAction<string>>
}
const InputTextear = ({ inputSendMessage, loading, value, setEditUserMessage }: InputTextearProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value)
        const inputTextArea = document.querySelector('#inputTextArea') as HTMLTextAreaElement
        if (inputTextArea) {
            inputTextArea.setSelectionRange(value.length, value.length)
            inputTextArea.focus()
        }
    }, [value, textareaRef.current]);
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        setEditUserMessage(event.target.value);
    };
    const textareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (loading) return
            inputSendMessage(inputValue);
            setInputValue('');
        }
    }
    return (
        <ConfigProvider theme={{
            components: {
                Input: {
                    activeBg: "transparent",
                    activeBorderColor: "transparent",
                    activeShadow: 'transparent',
                    hoverBorderColor: 'transparent',
                    inputFontSize: 20,
                }
            }
        }}>
            <div className="xl:w-[1200px] md:w-[800px] sm:w-[650px]  w-[440px] lg:left-[55%] left-[50%]  translate-x-[-50%]   z-10   py-sm px-sm md:px-0 fixed flex justify-center pointer-events-none   gap-xl md:bottom-[64px] bottom-[20px]   bg-transparent">
                <div className="pointer-events-auto  border-2 rounded-xl pl-2 py-1 pr-1   gap-2  bg-white flex items-center   duration-200transition-all  min-h-10 w-[80%]  " >
                    <Input.TextArea value={inputValue} ref={textareaRef} id="inputTextArea" onInput={handleInputChange} onKeyDown={textareaKeyDown} placeholder="输入你想了解的" autoSize={{ minRows: 1, maxRows: 12 }} className="border-none"></Input.TextArea>
                    <Button className="self-end" onClick={() => {
                        inputSendMessage(inputValue)
                        // textareaRef.current!.style.height = 32 + 'px';
                        setInputValue('')
                    }} isDisabled={inputValue.length == 0 && !loading} variant="light" isIconOnly>
                        <Icon icon="majesticons:messages" width={32} height={32} color="#39474a" />
                    </Button>
                </div>
            </div>
        </ConfigProvider>
    )
}
export default memo(InputTextear)
