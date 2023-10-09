import { configureChains, createConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";

import { goerli } from "../chains/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli],
    [
        jsonRpcProvider({
            rpc: chain => {
                if (chain.id === goerli.id) return { http: chain.rpcUrls.default.http[0] };

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
