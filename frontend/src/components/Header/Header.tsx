import { useCallback } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
// import { useEthers } from "@usedapp/core";

import logo from "@/images/logo.png";
import nav from "@/config/nav/nav";
import routes from "@/config/nav/routes";

// import metamaskLogo from "../../images/metamask_logo.png";

const Header = () => {
    const router = useRouter();
    // const { account, deactivate, activateBrowserWallet } = useEthers();

    const onNavigate = useCallback(
        (path: string) => {
            router.push(path);
        },
        [router]
    );

    return (
        <header className="Header">
            <div className="Header_Content">
                <Image src={logo} alt="" style={{ cursor: "pointer" }} height={40} width={138} onClick={() => onNavigate(routes.app)} />
                <div className="NavigationBar">
                    {nav.map(n => (
                        <div key={n.path} className={classNames("MenuItem", n.path === router.pathname && "current")} onClick={() => onNavigate("/app")}>
                            {n.title}
                        </div>
                    ))}
                    {/* {account ? (
                        <div className="MetamaskConnected ml-50" onClick={onAuthClick}>
                            <Image src={metamaskLogo} alt="" width={16} height={16} />
                            <div className="Address">{getShortAddress(account)}</div>
                        </div>
                    ) : (
                        <div className="MetamaskDisconnected ml-50" onClick={onAuthClick}>
                            Connect To Metamask
                        </div>
                    )} */}
                </div>
            </div>
        </header>
    );
};

export default Header;
