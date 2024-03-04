import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { memo, useRef, useState } from "react";

interface InputTextearProps {
    inputSendMessage: (val: string) => void
    loading?: boolean
}
const InputTextear = ({ inputSendMessage, loading }: InputTextearProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const classNames = {
        start: {
            button: [],
            boxContainerClass: ['items-center', 'duration-200', 'transition-all', 'border-[3px] border-[#828282]', 'flex', 'w-full', 'gap-3', 'outline-none', 'px-2 py-1.5', 'focus:outline-none', 'focus:ring-borderMain', 'font-sans', 'bg-[#fff]'],
            textareaClass: [' overflow-auto ', 'pt-[2px]', 'text-[#828282]', 'md:placeholder:leading-8 overflow-hidden', 'placeholder:leading-8', 'max-h-[190px]', 'duration-200', 'transition-all', 'focus:outline-none ', ' flex-1', 'lg:text-2xl text-xl', 'bg-transparent', 'resize-none'],
            sendClass: ['flex', 'items-center', 'gap-5', 'bg-[#fff]']
        },
        end: {
            button: ['flex', 'dark:bg-offsetDark', 'rounded-l-lg', 'col-start-1', 'row-start-2', '-ml-2'],
            boxContainerClass: ['border-[3px] border-[#828282]', 'duration-200', 'transition-all', 'bg-[#fff]', 'py-6 px-5', 'items-center', 'grid', 'grid-rows-1fr-auto', 'grid-cols-3', 'w-full', 'outline-none', 'focus:outline-none', 'gap-3'],
            textareaClass: [' overflow-auto ', 'pt-[2px]', 'text-[#828282]', 'col-start-1', 'col-end-4', 'pb-sm', 'overflow-auto', 'outline-none', 'w-full', 'font-sans', 'caret-superDuper', 'resize-none', 'bg-background', 'text-textMain', 'placeholder-textOff', 'max-h-[190px]', 'focus:outline-none', ' flex-1', 'lg:text-2xl text-xl', 'bg-transparent', 'resize-none'],
            sendClass: ['flex', 'bg-[#fff]', 'items-center', 'justify-self-end', 'bg-background', 'rounded-full', 'space-x-2', 'col-start-3', 'row-start-2', '-mr-2']
        }
    }
    const [inputValue, setInputValue] = useState('');
    const width = document.body.clientWidth;
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        setInputValue(textarea.value);
        if (width <= 450) {
            textarea.style.height = 32 + 'px';
        } else {
            textarea.style.height = 36 + 'px';
        }
        textarea.style.height = textarea.scrollHeight + 'px';
        textarea.scrollTop = 0;
    };
    const textareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (loading) return
            inputSendMessage(inputValue);
            setInputValue('');
            textareaRef.current!.style.height = 32 + 'px';
        }
    }
    return (
        <>
            <div className="xl:w-[1200px] md:w-[800px] sm:w-[650px]  w-[440px] lg:left-[55%] left-[50%]  translate-x-[-50%]   z-10   py-sm px-sm md:px-0 fixed flex justify-center pointer-events-none   gap-xl md:bottom-[64px] bottom-[20px]   bg-transparent">
                <div className="pointer-events-auto   bg-white   duration-200transition-all  min-h-10 w-[80%]   " style={{ borderRadius: inputValue.length < 30 ? '20px' : '20px' }} >
                    <div style={{ borderRadius: inputValue.length < 30 ? '20px' : '20px' }} className={inputValue.length <= 30 ? classNames.start.boxContainerClass.join(' ') : classNames.end.boxContainerClass.join(' ')}>
                        <div className={inputValue.length <= 30 ? classNames.start.button.join(' ') : classNames.end.button.join(' ')}>
                            <Button variant="light" isIconOnly>
                                <img src="/src/assets/logo.svg" alt="" className="w-6 h-7" />
                            </Button>
                        </div>
                        <textarea onKeyDown={textareaKeyDown} ref={textareaRef} style={{ height: 32, maxHeight: '290px' }} placeholder="输入你想了解的" className={inputValue.length <= 30 ? classNames.start.textareaClass.join(' ') : classNames.end.textareaClass.join(' ')} value={inputValue} onChange={handleInputChange} onInput={handleInputChange} />
                        <div className={inputValue.length <= 30 ? [...classNames.start.sendClass,].join(' ') : classNames.end.sendClass.join(' ')}>
                            {/* <Switch color="default" className="md:block hidden">
                                <span className="text-xl font-bold">Copilot</span>
                            </Switch> */}
                            <Button onClick={() => {
                                inputSendMessage(inputValue)
                                textareaRef.current!.style.height = 32 + 'px';
                                setInputValue('')
                            }} isDisabled={inputValue.length == 0 || loading} variant="light" isIconOnly>
                                <Icon icon="majesticons:messages" width={32} height={32} color="#39474a" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default memo(InputTextear, (prevProps, nextProps) => prevProps.loading === nextProps.loading)
