import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";

interface InputTextearProps {
    inputSendMessage: (val: string) => void
}
const InputTextear = ({ inputSendMessage }: InputTextearProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const classNames = {
        start: {
            button: [],
            boxContainerClass: ['items-center', 'duration-200', 'transition-all', 'border-2', 'flex', 'w-full', 'gap-5', 'outline-none', 'p-1 px-2', 'focus:outline-none', 'focus:ring-borderMain', 'font-sans', 'bg-[#fff]'],
            textareaClass: ['pl-2', 'text-gray-500', 'md:placeholder:leading-8', 'placeholder:leading-8', 'max-h-[190px]', 'duration-200', 'transition-all', 'focus:outline-none', ' flex-1', 'md:text-2xl', 'bg-transparent', 'resize-none'],
            sendClass: ['flex', 'items-center', 'gap-5', 'bg-[#fff]']
        },
        end: {
            button: ['flex', 'dark:bg-offsetDark', 'rounded-l-lg', 'col-start-1', 'row-start-2', '-ml-2'],
            boxContainerClass: ['border-2', 'duration-200', 'transition-all', 'bg-[#fff]', 'p-4', 'items-center', 'grid', 'grid-rows-1fr-auto', 'grid-cols-3', 'w-full', 'outline-none', 'focus:outline-none', 'gap-5'],
            textareaClass: ['pl-2', 'text-gray-500', 'col-start-1', 'col-end-4', 'pb-sm', 'overflow-auto', 'outline-none', 'w-full', 'font-sans', 'caret-superDuper', 'resize-none', 'bg-background', 'text-textMain', 'placeholder-textOff', 'max-h-[190px]', 'focus:outline-none', ' flex-1', 'md:text-2xl', 'bg-transparent', 'resize-none'],
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
            inputSendMessage(inputValue);
            setInputValue('');
        }
    }
    return (
        <>
            <div className="xl:w-[1200px] md:w-[800px] sm:w-[650px]  w-[440px] left-[50%] translate-x-[-50%]   z-10   py-sm px-sm md:px-0 fixed flex justify-center pointer-events-none   gap-xl md:bottom-[64px] bottom-[20px]   bg-transparent">
                <div className="pointer-events-auto   bg-white   duration-200transition-all  min-h-10 w-[80%]   " style={{ borderRadius: inputValue.length < 30 ? '999px' : '20px' }} >
                    <div style={{ borderRadius: inputValue.length < 30 ? '999px' : '20px' }} className={inputValue.length <= 30 ? classNames.start.boxContainerClass.join(' ') : classNames.end.boxContainerClass.join(' ')}>
                        {/* <div className={inputValue.length <= 30 ? classNames.start.button.join(' ') : classNames.end.button.join(' ')}>
                            <Button variant="light" isIconOnly>
                                <Icon icon="material-symbols:add-circle-outline" width={32} height={32} color="#39474a" />
                            </Button>
                        </div> */}
                        <textarea onKeyDown={textareaKeyDown} ref={textareaRef} style={{ height: 32, maxHeight: '290px' }} placeholder="你想知道什么？" className={inputValue.length <= 30 ? classNames.start.textareaClass.join(' ') : classNames.end.textareaClass.join(' ')} value={inputValue} onChange={handleInputChange} onInput={handleInputChange} />
                        <div className={inputValue.length <= 30 ? [...classNames.start.sendClass,].join(' ') : classNames.end.sendClass.join(' ')}>
                            {/* <Switch color="default" className="md:block hidden">
                                <span className="text-xl font-bold">Copilot</span>
                            </Switch> */}
                            <Button onClick={() => {
                                inputSendMessage(inputValue)
                                textareaRef.current!.style.height = 32 + 'px';
                                setInputValue('')
                            }} isDisabled={inputValue.length == 0} variant="light" isIconOnly>
                                <Icon icon="iconamoon:send-light" width={32} height={32} color="#39474a" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InputTextear
