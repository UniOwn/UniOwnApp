// import Image from "next/image";
import cn from "classnames";

import { kica } from "@/fonts";
import Flow from "@/components/Sections/Flow/Flow";
import Main from "@/components/Sections/Main/Main";
import Drown from "@/components/Sections/Drown/Drown";
import Targets from "@/components/Sections/Targets/Targets";
import Explore from "@/components/Sections/Explore/Explore";
// import backgroundTopLeft from "@/images/background-top-left.png";
// import backgroundTopRight from "@/images/background-top-right.png";

export default function Home() {
    return (
        <>
            {/* <Image src={backgroundTopLeft} quality={100} alt="" className="Background-TopLeft" />
            <Image src={backgroundTopRight} quality={100} alt="" className="Background-TopRight" /> */}
            <div className={cn("Landing-Page", kica.className)}>
                <Main />
                <Explore />
                <Flow />
                <Targets />
                <Drown />
            </div>
        </>
    );
}
