"use client";

import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

import logo from "../../../public/images/logo.png";
import ConnectWalletButton from "../Buttons/ConnectToWallet/ConnectToWallet";

import "./AppHeader.style.scss";

const AppHeader = () => {
    return (
        <Navbar shouldHideOnScroll className="AppHeader p-3" maxWidth="full">
            <NavbarBrand>
                <Image src={logo} priority alt="" sizes="100vw" className="AppHeader-Logo" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Games
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        Assets
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <ConnectWalletButton />
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default AppHeader;
