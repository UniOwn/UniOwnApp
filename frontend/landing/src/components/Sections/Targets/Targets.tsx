"use client";

import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import strings from "@/config/strings";
import { kica } from "@/fonts";
import useScreenWidth from "@/hooks/useScreenWidth";

import userEmoji from "../../../../public/images/targets/user.png";
import clientEmoji from "../../../../public/images/targets/client.png";
import aliensLeft from "../../../../public/images/targets/aliens-left.png";
import aliensRight from "../../../../public/images/targets/aliens-right.png";
import aliensDesktop from "../../../../public/images/targets/aliens-desktop.png";

import "./Targets.scss";
import Target from "./Target/Target";

const Targets = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const screenWidth = useScreenWidth();

    return (
        <section className="TargetsSection SectionWrapper">
            {screenWidth > 720 && (
                <Image src={aliensDesktop} alt="" sizes="100vw" priority className="TargetsSection-AliensDesktop" />
            )}
            {screenWidth <= 720 && (
                <>
                    <Image src={aliensLeft} alt="" sizes="100vw" priority className="TargetsSection-AliensLeft" />
                    <Image src={aliensRight} alt="" sizes="100vw" priority className="TargetsSection-AliensRight" />
                </>
            )}
            <div ref={sectionLabel} className={cn("SectionWrapper-Label", kica.className, sectionLabelInView && "in-view")}>
                {strings.targetsBlock.label}
            </div>
            <div className="TargetsSection-Benefits">
                <Target
                    labelImage={userEmoji}
                    label={strings.targetsBlock.userBenefits.label}
                    benefits={strings.targetsBlock.userBenefits.benefits}
                />
                <Target
                    labelImage={clientEmoji}
                    label={strings.targetsBlock.clientBenefits.label}
                    benefits={strings.targetsBlock.clientBenefits.benefits}
                />
            </div>
        </section>
    );
};

export default Targets;
