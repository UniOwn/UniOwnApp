import cn from "classnames";
import Image from "next/image";

import { kica } from "@/fonts";

import Launch from "../Buttons/Launch/Launch";
import logo from "../../../public/images/logo.png";
import "./Header.scss";

const Header = () => {
    return (
        <header className="AppHeader">
            <div className="AppHeader-Container">
                <div className="AppHeader-Container_logo">
                    <Image src={logo} alt="" sizes="100vw" className="AppHeader-Container_logo-image" />
                    <div className={cn("AppHeader-Container_logo-text", kica.className)}>UniOwn</div>
                </div>
                <Launch className="desktop-only" />
            </div>
        </header>
    );
};

export default Header;
