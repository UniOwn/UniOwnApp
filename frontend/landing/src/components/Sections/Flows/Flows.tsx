"use client";

import cn from "classnames";
import { useInView } from "react-intersection-observer";

import { kica } from "@/fonts";
import strings from "@/config/strings";
import useScreenWidth from "@/hooks/useScreenWidth";

import Divider from "../../Divider/Divider";
import phase1HeaderImage from "../../../../public/images/flows/phase1.png";
import phase2HeaderImage from "../../../../public/images/flows/phase2.png";
import phase3HeaderImage from "../../../../public/images/flows/phase3.png";

import FlowMobile from "./FlowMobile/FlowMobile";
import FlowDesktop from "./FlowDesktop/FlowDesktop";
import "./Flows.scss";

const Flows = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const { ref: flows, inView: flowsInView } = useInView({ triggerOnce: true });
    const screenWidth = useScreenWidth();

    return (
        <section className="FlowSection SectionWrapper">
            <div ref={sectionLabel} className={cn("SectionWrapper-Label", kica.className, sectionLabelInView && "in-view")}>
                {strings.flowBlock.label}
            </div>
            <div ref={flows} className="FlowSection-Flows">
                {screenWidth > 720 ? (
                    <FlowDesktop
                        className="Phase1"
                        flowInView={flowsInView}
                        image={phase1HeaderImage}
                        label={strings.flowBlock.phase1.header}
                        description={strings.flowBlock.phase1.description}
                    />
                ) : (
                    <FlowMobile
                        className="Phase1"
                        flowInView={flowsInView}
                        image={phase1HeaderImage}
                        label={strings.flowBlock.phase1.header}
                        description={strings.flowBlock.phase1.description}
                    />
                )}
                {screenWidth > 720 && (
                    <Divider type="flowDesktop" className={cn("Divider1", flowsInView && "in-view")} gradientDirection="right" />
                )}
                {screenWidth <= 720 && <Divider type="flowMobile" gradientDirection="left" />}
                {screenWidth > 720 ? (
                    <FlowDesktop
                        className="Phase2"
                        flowInView={flowsInView}
                        image={phase2HeaderImage}
                        label={strings.flowBlock.phase2.header}
                        description={strings.flowBlock.phase2.description}
                        additionalInfo={strings.flowBlock.phase2.additionalInfo}
                    />
                ) : (
                    <FlowMobile
                        className="Phase2"
                        flowInView={flowsInView}
                        image={phase2HeaderImage}
                        label={strings.flowBlock.phase2.header}
                        description={strings.flowBlock.phase2.description}
                        additionalInfo={strings.flowBlock.phase2.additionalInfo}
                    />
                )}
                {screenWidth > 720 && (
                    <Divider type="flowDesktop" className={cn("Divider2", flowsInView && "in-view")} gradientDirection="left" />
                )}
                {screenWidth <= 720 && <Divider type="flowMobile" gradientDirection="left" />}
                {screenWidth > 720 ? (
                    <FlowDesktop
                        className="Phase3"
                        flowInView={flowsInView}
                        image={phase3HeaderImage}
                        label={strings.flowBlock.phase3.header}
                        description={strings.flowBlock.phase3.description}
                    />
                ) : (
                    <FlowMobile
                        className="Phase3"
                        flowInView={flowsInView}
                        image={phase3HeaderImage}
                        label={strings.flowBlock.phase3.header}
                        description={strings.flowBlock.phase3.description}
                    />
                )}
            </div>
        </section>
    );
};

export default Flows;
