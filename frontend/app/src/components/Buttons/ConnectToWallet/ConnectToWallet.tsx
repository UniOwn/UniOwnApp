"use client";

import { SiweMessage } from "siwe";
import { Button } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { getCsrfToken, signIn, signOut } from "next-auth/react";
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from "wagmi";

import { getShortAddress } from "@/utils";
import withWagmi from "@/shared/hocs/wagmi/withWagmi";

import "./ConnectToWallet.style.scss";

const ConnectWalletButton = () => {
    const { chain } = useNetwork();
    const { disconnectAsync } = useDisconnect();
    const { address, isConnected } = useAccount({
        onDisconnect: async () => {
            await signOut();
        }
    });
    const { signMessageAsync } = useSignMessage();
    const { connectAsync, connectors } = useConnect();
    const [isWalletConnected, setWalletConnected] = useState<boolean>(false);

    const onDisconnect = async () => {
        await signOut();
        await disconnectAsync();
        setWalletConnected(false);
    };

    const onConnect = useCallback(async () => {
        const connected = await connectAsync({ connector: connectors[0] });

        if (connected?.account) {
            setWalletConnected(true);

            const message = new SiweMessage({
                domain: window.location.host,
                address: connected?.account,
                statement: "Sign in with Ethereum to the app.",
                uri: window.location.origin,
                version: "1",
                chainId: chain?.id,
                nonce: await getCsrfToken()
            });

            const signature = await signMessageAsync({
                message: message.prepareMessage()
            });

            await signIn("web3", {
                message: JSON.stringify(message),
                redirect: false,
                signature
            });
        }
    }, [chain?.id, connectAsync, connectors, signMessageAsync]);

    useEffect(() => {
        setWalletConnected(isConnected);
    }, [isConnected]);

    return (
        <>
            {isWalletConnected ? (
                <Button className="Metamask Connected" onClick={onDisconnect}>
                    <div className="Address">{getShortAddress(address)}</div>
                </Button>
            ) : (
                <Button className="Metamask Disconnected" onClick={onConnect}>
                    Connect To Metamask
                </Button>
            )}
        </>
    );
};

export default withWagmi(ConnectWalletButton);
