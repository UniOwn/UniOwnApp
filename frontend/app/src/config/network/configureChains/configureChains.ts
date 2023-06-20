import { configureChains, createConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";

import { mantle } from "../chains/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mantle],
    [
        jsonRpcProvider({
            rpc: chain => {
                if (chain.id === mantle.id) return { http: chain.rpcUrls.default.http[0] };

                return null;
            }
        })
    ]
);

const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new InjectedConnector({
            chains
        })
    ],
    publicClient,
    webSocketPublicClient
});

export default config;
