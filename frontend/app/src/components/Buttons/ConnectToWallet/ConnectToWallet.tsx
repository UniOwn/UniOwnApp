import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import withWagmi from "@/shared/hocs/wagmi/withWagmi";
import { getShortAddress } from "@/utils/utils";

import metamaskLogo from "@/images/metamask_logo.png";

import "./ConnectToWallet.style.scss";

const ConnectWalletButton = () => {
    const { address, isConnected } = useAccount();
    const [isWalletConnected, setWalletConnected] = useState<boolean>(false);
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    const onAuthClick = useCallback(() => {
        if (isConnected) {
            disconnect();
        } else {
            connect({ connector: connectors[0] });
        }
    }, [connect, isConnected, disconnect, connectors]);

    useEffect(() => setWalletConnected(isConnected), [isConnected]);

    return (
        <>
            {isWalletConnected ? (
                <div className="Metamask Connected" onClick={onAuthClick}>
                    <Image src={metamaskLogo} alt="" width={16} height={16} />
                    <div className="Address">{getShortAddress(address)}</div>
                </div>
            ) : (
                <div className="Metamask Disconnected" onClick={onAuthClick}>
                    Connect To Metamask
                </div>
            )}
        </>
    );
};

export default withWagmi(ConnectWalletButton);
