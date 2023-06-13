"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import nav from "@/config/nav/nav";

import ConnectWalletButton from "../Buttons/ConnectToWallet/ConnectToWallet";

import "./Navbar.scss";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="Navbar">
            {nav.map(n => (
                <Link key={n.path} href={n.path} className={classNames("MenuItem", n.path === pathname && "current")}>
                    {n.title}
                </Link>
            ))}
            <ConnectWalletButton />
        </div>
    );
};

export default Navbar;
