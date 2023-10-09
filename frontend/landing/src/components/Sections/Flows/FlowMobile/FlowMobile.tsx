import cn from "classnames";
import Image, { StaticImageData } from "next/image";

import { gilroy, misto } from "@/fonts";

import "./FlowMobile.scss";

interface IFlowMobileProps {
    label: string;
    className: string;
    flowInView: boolean;
    description: string;
    image: StaticImageData;
    additionalInfo?: string;
}

const FlowMobile = ({ flowInView, image, className, label, description, additionalInfo }: IFlowMobileProps) => {
    return (
        <div className={cn("Flow", className, flowInView && "in-view")}>
            <div className="FlowDetails">
                <div className={cn("FlowDetails-Label", misto.className)}>{label}</div>
                <div className={cn("FlowDetails-Description", gilroy.className)}>{description}</div>
                {additionalInfo && (
                    <div className={cn("FlowDetails-AdditionalInfo", gilroy.className)}>
                        {additionalInfo?.split(",").map(addInfo => (
                            <div key={addInfo}>{addInfo}</div>
                        ))}
                    </div>
                )}
            </div>
            <Image src={image} sizes="100vw" alt="" className="FlowImage" />
        </div>
    );
};

export default FlowMobile;
