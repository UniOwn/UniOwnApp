import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

import { kica, gilroy } from "@/fonts";

import "./Target.scss";

interface ITargetProps {
    label: string[];
    benefits: string[];
    labelImage: StaticImageData;
}

const Target = ({ label, benefits, labelImage }: ITargetProps) => {
    const { ref: benefitLabes, inView: benefitLabesInView } = useInView({ triggerOnce: true });
    const { ref: descriptionItems, inView: descriptionItemsInView } = useInView({ triggerOnce: true });

    return (
        <div className="Benefit">
            <div ref={benefitLabes} className={cn("BenefitLabel", kica.className, benefitLabesInView && "in-view")}>
                <div className="BenefitLabel-Text">{label[0]}</div>
                <Image src={labelImage} alt="" sizes="100vw" className="BenefitLabel-Image" />
                <div className="BenefitLabel-Text">{label[1]}</div>
            </div>
            <div ref={descriptionItems} className={cn("BenefitDetails", gilroy.className)}>
                {benefits.map((benefit, i) => (
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
    );
};

export default Target;
