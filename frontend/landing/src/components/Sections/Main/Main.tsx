"use client";

import cn from "classnames";
import Image from "next/image";

import strings from "@/config/strings";
import { kica, misto } from "@/fonts";
import useScreenWidth from "@/hooks/useScreenWidth";
import Launch from "@/components/Buttons/Launch/Launch";

import pillLeft from "../../../../public/images/main/pill-left.png";
import pillBottom from "../../../../public/images/main/pill-bottom.png";

import "./Main.scss";

const Main = () => {
    const screenSize = useScreenWidth();

    return (
        <div className="MainSection">
            <div className="MainSection-Label">
                <Image src={pillLeft} alt="" sizes="100vw" className="MainSection-Label_icon-pill-left" />
                {screenSize > 720 && (
                    <Image src={pillBottom} alt="" sizes="100vw" className="MainSection-Label_icon-pill-bottom" />
                )}
                <pre className={cn("MainSection-Label_text", kica.className)}>
                    Reducing the <span className={misto.className}>Entry</span>
                    {"\n"}
                    <span className={misto.className}>threshold</span> to WEB3
                </pre>
            </div>
            <div className={cn("MainSection-Description", kica.className)}>{strings.mainBlock.description}</div>
            <Launch className="mobile-only" />
        </div>
    );
};

export default Main;
