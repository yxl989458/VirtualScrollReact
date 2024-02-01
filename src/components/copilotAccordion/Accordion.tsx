import AccordionFold from "@components/copilotAccordion/AccordionFold";
import { ArrowLeft } from "@components/Icon/ArrowLeft";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionItem } from "@nextui-org/react"

const AccordionCom = () => {
    return (
        <div className="my-5">
            <Accordion variant="bordered" fullWidth={true} className="bg-offset">
                <AccordionItem key="1" startContent={
                    <div className="flex items-center gap-2 ">
                        <Icon
                            icon="material-symbols:award-star"
                            width={28}
                            height={28}
                        />
                        <span className="text-2xl font-bold">Copilot</span>
                    </div>
                } aria-label="Accordion 1" className="bg-offset" disableAnimation={false} indicator={({ isOpen }) => (isOpen ? <ArrowLeft /> : <AccordionFold />)}>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2"> <Icon icon="iconamoon:apps" width={28} height={28} />
                            <p className="text-xl ">Copilot</p></div>
                        <div className="flex gap-2"> <Icon icon="iconamoon:apps" width={28} height={28} />
                            <p className="text-xl ">Copilot</p></div>
                        <div className="flex gap-2"> <Icon icon="iconamoon:apps" width={28} height={28} />
                            <p className="text-xl ">Copilot</p></div>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default AccordionCom
