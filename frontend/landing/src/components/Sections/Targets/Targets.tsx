"use client";

import cn from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import strings from "@/config/strings";
import { kica, gilroy } from "@/fonts";
import userEmoji from "@/images/targets/user.svg";
import Divider from "@/components/Divider/Divider";
import clientEmoji from "@/images/targets/client.svg";
// import aliens from "@/images/targets/aliens.svg";

import "./Targets.scss";

const Targets = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const { ref: benefitLabes, inView: benefitLabesInView } = useInView({ triggerOnce: true });
    const { ref: descriptionItems, inView: descriptionItemsInView } = useInView({ triggerOnce: true });

    return (
        <div className="TargetsSection SectionWrapper">
            {/* <Image src={aliens} alt="" quality={100} className="TargetsSection-SideBackground" /> */}
            <div ref={sectionLabel} className={cn("SectionWrapper-Label", kica.className, sectionLabelInView && "in-view")}>
                {strings.targetsBlock.label}
            </div>
            <div className="TargetsSection-Benefits">
                <div className="Benefit">
                    <div ref={benefitLabes} className={cn("BenefitLabel", kica.className, benefitLabesInView && "in-view")}>
                        <div className="BenefitLabel-Text">{strings.targetsBlock.userBenefits.label[0]}</div>
                        <Image src={userEmoji} alt="" quality={100} className="BenefitLabel-Image" />
                        <div className="BenefitLabel-Text">{strings.targetsBlock.userBenefits.label[1]}</div>
                    </div>
                    <div ref={descriptionItems} className="BenefitDetails">
                        <div className={cn("BenefitDetails-Items", gilroy.className)}>
                            {strings.targetsBlock.userBenefits.benefits.map((benefit, i) => (
                                <div
                                    key={benefit}
                                    className={cn(
                                        "BenefitDetails-Items_description",
                                        `BenefitDetails-Items_description-item${i + 1}`,
                                        descriptionItemsInView && `BenefitDetails-Items_description-item${i + 1}-in-view`
                                    )}
                                >
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <Divider
                            type="target"
                            count={4}
                            gradientDirection="right"
                            flexDirection="column"
                            inView={descriptionItemsInView}
                        />
                    </div>
                </div>
                <div className="Benefit">
                    <div ref={benefitLabes} className={cn("BenefitLabel", kica.className, benefitLabesInView && "in-view")}>
                        <div className="BenefitLabel-Text">{strings.targetsBlock.clientBenefits.label[0]}</div>
                        <Image src={clientEmoji} alt="" quality={100} className="BenefitLabel-Image" />
                        <div className="BenefitLabel-Text">{strings.targetsBlock.clientBenefits.label[1]}</div>
                    </div>
                    <div className="BenefitDetails">
                        <div ref={descriptionItems} className={cn("BenefitDetails-Items", gilroy.className)}>
                            {strings.targetsBlock.clientBenefits.benefits.map((benefit, i) => (
                                <div
                                    key={benefit}
                                    className={cn(
                                        "BenefitDetails-Items_description",
                                        `BenefitDetails-Items_description-item${i + 1}`,
                                        descriptionItemsInView && `BenefitDetails-Items_description-item${i + 1}-in-view`
                                    )}
                                >
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <Divider
                            type="target"
                            count={5}
                            gradientDirection="right"
                            flexDirection="column"
                            inView={descriptionItemsInView}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Targets;
