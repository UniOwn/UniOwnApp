import { useCallback, useState } from "react";
import { useEthers } from "@usedapp/core";
import classNames from "classnames";

import subroutes from "../../routes/subroutes";
import { AppProvider } from "../../context/context";
import { getShortAddress } from "../../utils/utils";

import logo from "../../images/logo.png";
import metamaskLogo from "../../images/metamask_logo.png";

import "./App.scss";

const App = () => {
    const { account, deactivate, activateBrowserWallet } = useEthers();

    const onNavigate = useCallback(
        (path: string) => {
            navigate(path);
        },
        [navigate]
    );

    const onAuthClick = useCallback(() => {
        if (account) {
            deactivate();
        } else {
            activateBrowserWallet();
        }
    }, [account, deactivate, activateBrowserWallet]);

    return (
        <div className="App min-h-full">
            <header className="App-Header">
                <div className="App-Header_Content">
                    <img src={logo} alt="" style={{ cursor: "pointer" }} height={40} width={138} onClick={() => onNavigate("/app")} />
                    <div className="App-Header_Controls">
                        <div className={classNames("MenuItem", "/app" === location.pathname ? "current" : "")} onClick={() => onNavigate("/app")}>
                            Pools
                        </div>
                        <div className={classNames("MenuItem", "/app/profile" === location.pathname ? "current" : "")} onClick={() => onNavigate("/app/profile")}>
                            Profile
                        </div>
                        <div className={classNames("MenuItem", "/app/passport" === location.pathname ? "current" : "")} onClick={() => onNavigate("/app/passport")}>
                            UniOwn Passport
                        </div>
                        <div className={classNames("MenuItem", "" === location.pathname ? "current" : "")} onClick={() => onNavigate("")}>
                            Forum
                        </div>
                        {account ? (
                            <div className="MetamaskConnected ml-50" onClick={onAuthClick}>
                                <img src={metamaskLogo} alt="" width={16} height={16} />
                                <div className="Address">{getShortAddress(account)}</div>
                            </div>
                        ) : (
                            <div className="MetamaskDisconnected ml-50" onClick={onAuthClick}>
                                Connect To Metamask
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="">
                <AppProvider>
                    <div className="min-h-full">{routesMapper(subroutes)}</div>
                </AppProvider>
            </main>
        </div>
    );
};

export default App;
