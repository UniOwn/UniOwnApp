import Link from "next/link";
import Image from "next/image";

import logo from "@/images/logo.png";
import routes from "@/config/nav/routes";

import Navbar from "../Navbar/Navbar";

import "./Header.scss";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header_Content">
                <Link href={routes.home}>
                    <Image src={logo} priority={true} alt="UniOwn" style={{ cursor: "pointer" }} height={40} width={138} />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
