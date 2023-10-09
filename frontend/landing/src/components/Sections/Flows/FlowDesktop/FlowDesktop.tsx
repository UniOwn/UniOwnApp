import cn from "classnames";
import Image, { StaticImageData } from "next/image";

import { gilroy, misto } from "@/fonts";

import "./FlowDesktop.scss";

interface IFlowDesktopProps {
    label: string;
    className: string;
    flowInView: boolean;
    description: string;
    image: StaticImageData;
    additionalInfo?: string;
}

const FlowDesktop = ({ flowInView, image, className, label, description, additionalInfo }: IFlowDesktopProps) => {
    return (
        <div className={cn("Flow", className, flowInView && "in-view")}>
            <div className="FlowLabel">
                <div className={cn("FlowLabel-Text", misto.className)}>{label}</div>
                <Image src={image} sizes="100vw" alt="" className="FlowLabel-Image" />
            </div>
            <div className={cn("FlowDescription", gilroy.className)}>{description}</div>
            {additionalInfo && (
                <div className={cn("FlowAdditionalInfo", gilroy.className)}>
                    {additionalInfo?.split(",").map(addInfo => (
                        <div key={addInfo}>{addInfo}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FlowDesktop;
