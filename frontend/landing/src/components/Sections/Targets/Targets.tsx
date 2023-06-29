"use client";

import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import strings from "@/config/strings";
import { kica, gilroy } from "@/fonts";
import useScreenWidth from "@/hooks/useScreenWidth";

import userEmoji from "../../../../public/images/targets/user.png";
import clientEmoji from "../../../../public/images/targets/client.png";
import aliensLeft from "../../../../public/images/targets/aliens-left.png";
import aliensRight from "../../../../public/images/targets/aliens-right.png";
import aliensDesktop from "../../../../public/images/targets/aliens-desktop.png";

import "./Targets.scss";

const Targets = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const { ref: benefitLabes, inView: benefitLabesInView } = useInView({ triggerOnce: true });
    const { ref: descriptionItems, inView: descriptionItemsInView } = useInView({ triggerOnce: true });

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
                <div className="Benefit">
                    <div ref={benefitLabes} className={cn("BenefitLabel", kica.className, benefitLabesInView && "in-view")}>
                        <div className="BenefitLabel-Text">{strings.targetsBlock.userBenefits.label[0]}</div>
                        <Image src={userEmoji} alt="" sizes="100vw" className="BenefitLabel-Image" />
                        <div className="BenefitLabel-Text">{strings.targetsBlock.userBenefits.label[1]}</div>
                    </div>
                    <div ref={descriptionItems} className={cn("BenefitDetails", gilroy.className)}>
                        {strings.targetsBlock.userBenefits.benefits.map((benefit, i) => (
                            <div
                                key={benefit}
                                className={cn(
                                    "BenefitDetails_description",
                                    `BenefitDetails_description-item${i + 1}`,
                                    descriptionItemsInView && `BenefitDetails_description-item${i + 1}-in-view`
                                )}
                            >
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Benefit">
                    <div ref={benefitLabes} className={cn("BenefitLabel", kica.className, benefitLabesInView && "in-view")}>
                        <div className="BenefitLabel-Text">{strings.targetsBlock.clientBenefits.label[0]}</div>
                        <Image src={clientEmoji} alt="" sizes="100vw" className="BenefitLabel-Image" />
                        <div className="BenefitLabel-Text">{strings.targetsBlock.clientBenefits.label[1]}</div>
                    </div>
                    <div ref={descriptionItems} className={cn("BenefitDetails", gilroy.className)}>
                        {strings.targetsBlock.clientBenefits.benefits.map((benefit, i) => (
                            <div
                                key={benefit}
                                className={cn(
                                    "BenefitDetails_description",
                                    `BenefitDetails_description-item${i + 1}`,
                                    descriptionItemsInView && `BenefitDetails_description-item${i + 1}-in-view`
                                )}
                            >
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Targets;
