"use client";

import cn from "classnames";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { useInView } from "react-intersection-observer";

import { kica, gilroy } from "@/fonts";
import strings from "@/config/strings";

import TwitterLink from "./TwitterLink/TwitterLink";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Drown.scss";

const Dots = (): JSX.Element => {
    return <div className={cn("Dot", "MainDot", "op-4")} />;
};

const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    useTransform: false,
    customPaging: Dots,
    dotsClass: "SliderDots"
};

const SliderWrapper = () => {
    return (
        <Slider {...settings} className="Slider">
            {strings.drownBlock.container.advantages.map((adv, i) => (
                <div key={`${adv.text.slice(0, 10)}${i}`} className={cn("DrownDetail", gilroy.className, `item${i + 1}`)}>
                    <Image src={adv.image} alt="" sizes="100vw" className="DrownDetail-Icon" />
                    {adv.text}
                </div>
            ))}
        </Slider>
    );
};

const Drown = () => {
    const { ref: sectionLabel, inView: sectionLabelInView } = useInView({ triggerOnce: true });
    const { ref: container, inView: containerInView } = useInView({ triggerOnce: true });

    return (
        <div className={cn("DrownSection", "SectionWrapper")}>
            <div ref={sectionLabel} className={cn("SectionWrapper-Label", kica.className, sectionLabelInView && "in-view")}>
                {strings.drownBlock.label}
            </div>
            <div ref={container} className={cn("DrownSection-Container", containerInView && "in-view")}>
                <div className="DrownSection-Container_details">
                    <pre className={cn("DrownHeader", kica.className)}>{strings.drownBlock.container.header}</pre>
                    <div className={cn("DrownDetail", gilroy.className)}>{strings.drownBlock.container.description}</div>
                    <SliderWrapper />
                </div>
                <TwitterLink />
            </div>
        </div>
    );
};

export default Drown;
