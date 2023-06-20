"use client";

import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import strings from "@/config/strings";
import { kica, gilroy, misto } from "@/fonts";
import phase1HeaderImage from "@/images/flows/phase1.svg";
import phase2HeaderImage from "@/images/flows/phase2.svg";
import phase3HeaderImage from "@/images/flows/phase3.svg";

import Divider from "../../Divider/Divider";
import "./Flow.scss";

const Flow = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const { ref: flows, inView: flowsInView } = useInView({ triggerOnce: true });

    return (
        <section className="FlowSection SectionWrapper">
            <div ref={sectionLabel} className={cn("SectionWrapper-Label", kica.className, sectionLabelInView && "in-view")}>
                {strings.flowBlock.label}
            </div>
            <div ref={flows} className="FlowSection-Flows">
                <div className={cn("Flow", "Phase1", flowsInView && "in-view")}>
                    <div className="FlowLabel">
                        <div className={cn("FlowLabel-Text", misto.className)}>{strings.flowBlock.phase1.header}</div>
                        <Image src={phase1HeaderImage} alt="" quality={100} className="FlowLabel-Image" />
                    </div>
                    <div className={cn("FlowDescription", gilroy.className)}>{strings.flowBlock.phase1.description}</div>
                </div>
                <Divider type="flow" className={cn("Divider1", flowsInView && "in-view")} gradientDirection="right" />
                <div className={cn("Flow", "Phase2", flowsInView && "in-view")}>
                    <div className="FlowLabel">
                        <div className={cn("FlowLabel-Text", misto.className)}>{strings.flowBlock.phase2.header}</div>
                        <Image src={phase2HeaderImage} alt="" quality={100} className="FlowLabel-Image" />
                    </div>
                    <div className={cn("FlowDescription", gilroy.className)}>{strings.flowBlock.phase2.description}</div>
                    <div className={cn("FlowAdditionalInfo", gilroy.className)}>
                        {strings.flowBlock.phase2.additionalInfo?.split(",").map(addInfo => (
                            <div key={addInfo}>{addInfo}</div>
                        ))}
                    </div>
                </div>
                <Divider type="flow" className={cn("Divider2", flowsInView && "in-view")} gradientDirection="left" />
                <div className={cn("Flow", "Phase3", flowsInView && "in-view")}>
                    <div className="FlowLabel">
                        <div className={cn("FlowLabel-Text", misto.className)}>{strings.flowBlock.phase3.header}</div>
                        <Image src={phase3HeaderImage} alt="" quality={100} className="FlowLabel-Image" />
                    </div>
                    <div className={cn("FlowDescription", gilroy.className, "w-third")}>
                        {strings.flowBlock.phase3.description}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
