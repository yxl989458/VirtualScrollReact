import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Switch } from "@nextui-org/react";
import { useState } from "react";

interface InputTextearProps {
    inputSendMessage: (val: string) => void
}
const InputTextear = ({inputSendMessage}:InputTextearProps) => {

    const classNames = {
        start: {
            button: [],
            boxContainerClass: ['items-center', 'duration-200', 'transition-all', 'border-2', 'flex', 'w-full', 'gap-5', 'outline-none', 'p-2', 'focus:outline-none', 'focus:ring-borderMain', 'font-sans', 'bg-[#fcfcf9]'],
            textareaClass: ['max-h-[190px]', 'duration-200', 'transition-all', 'focus:outline-none', ' flex-1', 'text-2xl', 'bg-transparent', 'resize-none'],
            sendClass: ['flex', 'gap-5']
        },
        end: {
            button: ['flex', 'dark:bg-offsetDark', 'rounded-l-lg', 'col-start-1', 'row-start-2', '-ml-2'],
            boxContainerClass: ['duration-200', 'transition-all', 'bg-[#fcfcf9]', 'p-4', 'items-center', 'grid', 'grid-rows-1fr-auto', 'grid-cols-3', 'w-full', 'outline-none', 'focus:outline-none', 'gap-5'],
            textareaClass: ['col-start-1', 'col-end-4', 'pb-sm', 'overflow-auto', 'max-h-[35vh]', 'outline-none', 'w-full', 'font-sans', 'caret-superDuper', 'resize-none', 'bg-background', 'text-textMain', 'placeholder-textOff', 'max-h-[190px]', 'focus:outline-none', ' flex-1', 'text-2xl', 'bg-transparent', 'resize-none'],
            sendClass: ['flex', 'items-center', 'justify-self-end', 'bg-background', 'rounded-full', 'space-x-2', 'col-start-3', 'row-start-2', '-mr-2']
        }
    }


    const [inputValue, setInputValue] = useState('');
    const minTextareaHeight = 32;
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        setInputValue(textarea.value);
        textarea.style.height = 'auto';
        if (textarea.scrollHeight === minTextareaHeight * 2) {
            textarea.style.height = minTextareaHeight + 'px';
        }
        textarea.style.height = textarea.scrollHeight + 'px';
        textarea.scrollTop = 0; // Set scrollTop to 0 to make the textarea grow upwards
    };
    return (
        <>

            <div style={{ width: '1100px' }} className="z-10 md:bottom-lg  py-sm px-sm md:px-0 fixed flex justify-center pointer-events-none   gap-xl bottom-[64px]   bg-transparent">
                <div className="pointer-events-auto   bg-offset duration-200transition-all  min-h-10 w-[80%]   md:p-3 " style={{ borderRadius: inputValue.length < 30 ? '999px' : '20px' }} >
                    <div style={{ borderRadius: inputValue.length < 30 ? '999px' : '20px' }} className={inputValue.length <= 30 ? classNames.start.boxContainerClass.join(' ') : classNames.end.boxContainerClass.join(' ')}>
                        <div className={inputValue.length <= 30 ? classNames.start.button.join(' ') : classNames.end.button.join(' ')}>
                            <Button variant="light" isIconOnly>
                                <Icon icon="material-symbols:add-circle-outline" width={32} height={32} color="#39474a" />
                            </Button>
                        </div>
                        <textarea style={{ height: minTextareaHeight }} placeholder="Ask follow-up questions" className={inputValue.length <= 30 ? classNames.start.textareaClass.join(' ') : classNames.end.textareaClass.join(' ')} value={inputValue} onChange={handleInputChange} />
                        <div className={inputValue.length <= 30 ? classNames.start.sendClass.join(' ') : classNames.end.sendClass.join(' ')}>
                            <Switch defaultSelected color="default">
                                <span className="text-xl font-bold">Copilot</span>
                            </Switch>
                            <Button onClick={() => inputSendMessage(inputValue)} isDisabled={inputValue.length == 0} variant="light" isIconOnly>
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
