import { useCallback, useState } from "react";
import classNames from "classnames";

import subroutes from "../../routes/subroutes";
import { AppProvider } from "../../context/context";
import { getShortAddress } from "../../utils/utils";



import "./App.scss";
import Image from "next/image";

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


            <main className="">
                <AppProvider>
                    <div className="min-h-full">{routesMapper(subroutes)}</div>
                </AppProvider>
            </main>
        </div>
    );
};

export default App;
