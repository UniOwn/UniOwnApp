import Image from "next/image";
import cn from "classnames";

import { kica } from "@/fonts";
import Flows from "@/components/Sections/Flows/Flows";
import Main from "@/components/Sections/Main/Main";
import Drown from "@/components/Sections/Drown/Drown";
import Targets from "@/components/Sections/Targets/Targets";
import Explore from "@/components/Sections/Explore/Explore";

import backgroundTop from "../../public/images/background-top.png";
import backgroundMobile from "../../public/images/background-mobile.png";
import backgroundTopRight from "../../public/images/background-top-right.png";

export default function Home() {
    return (
        <>
            <Image src={backgroundTop} alt="" priority sizes="100vw" className="Background-Top" />
            <Image src={backgroundMobile} alt="" priority sizes="100vw" className="Background-Mobile" />
            <Image src={backgroundTopRight} alt="" priority sizes="100vw" className="Background-TopRight" />
            <div className={cn("Landing-Page", kica.className)}>
                <Main />
                <Explore />
                <Flows />
                <Targets />
                <Drown />
            </div>
        </>
    );
}
