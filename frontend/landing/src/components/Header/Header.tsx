import Image from "next/image";

import logo from "@/images/logo.png";
import launch from "@/images/launch_button.png";

import "./Header.scss";

const Header = () => {
    return (
        <header className="AppHeader">
            <div className="AppHeader-Container">
                <Image src={logo} alt="" quality={100} className="AppHeader-Container_logo" />
                <Image src={launch} alt="" quality={100} className="AppHeader-Container_launch" />
            </div>
        </header>
    );
};

export default Header;
