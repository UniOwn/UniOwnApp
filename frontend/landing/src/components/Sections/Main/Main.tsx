"use client";

import cn from "classnames";
import Image from "next/image";

import strings from "@/config/strings";
import { kica, misto, gilroy } from "@/fonts";
import useScreenWidth from "@/hooks/useScreenWidth";
import Launch from "@/components/Buttons/Launch/Launch";

import battery from "../../../../public/images/main/battery.png";
import location from "../../../../public/images/main/location.png";

import "./Main.scss";

const Main = () => {
    const screenSize = useScreenWidth();

    return (
        <div className="MainSection">
            <div className="MainSection-Label">
                {screenSize > 720 && <Image src={location} alt="" sizes="100vw" className="MainSection-Label_icon-location " />}
                {screenSize > 720 && <Image src={battery} alt="" sizes="100vw" className="MainSection-Label_icon-battery" />}
                <pre className={cn("MainSection-Label_text", "desktop-only", kica.className)}>
                    Reducing the <span className={misto.className}>entrance</span>
                    {"\n"}
                    threshold in Mantle
                    {"\n"}
                    <span className={misto.className}>ecosystem</span>
                </pre>
                <pre className={cn("MainSection-Label_text", "mobile-only", kica.className)}>
                    Reducing the
                    {"\n"}
                    <span className={misto.className}>entrance</span> threshold
                    {"\n"}
                    in Mantle <span className={misto.className}>ecosystem</span>
                </pre>
            </div>
            <div className={cn("MainSection-Description", gilroy.className)}>{strings.mainBlock.description}</div>
            <Launch className="mobile-only" />
        </div>
    );
};

export default Main;
