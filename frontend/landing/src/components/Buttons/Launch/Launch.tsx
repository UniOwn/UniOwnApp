import cn from "classnames";
import Image from "next/image";

import { gilroy } from "@/fonts";

import launchButtonMask from "../../../../public/images/launch-button-mask.png";
import "./Launch.scss";

interface ILaunchProps {
    className: string;
}

const Launch = ({ className }: ILaunchProps) => {
    return (
        <div className={cn("LaunchWrapper", className)}>
            <Image src={launchButtonMask} alt="" className="LaunchWrapper-Mask" />
            <div className={cn("LaunchWrapper-Text", gilroy.className)}>Launch App</div>
        </div>
    );
};

export default Launch;
