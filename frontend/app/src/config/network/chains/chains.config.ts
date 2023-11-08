import { Chain } from "wagmi";

import { parseEnvVariable } from "@/utils/parse-env-variable";

export const mantle: Chain = {
    id: 5001,
    name: "mantle",
    network: "mantle",
    nativeCurrency: {
        decimals: 18,
        name: "BIT",
        symbol: "BIT"
    },
    rpcUrls: {
        default: { http: [parseEnvVariable(process.env.NEXT_PUBLIC_MANTLE_RPC_URL)] },
        public: { http: [parseEnvVariable(process.env.NEXT_PUBLIC_MANTLE_RPC_URL)] }
    },
    blockExplorers: {
        default: { name: "MantleBlockExplorer", url: "https://explorer.mantle.xyz" }
    }
} as const satisfies Chain;

export const goerli: Chain = {
    id: 5,
    name: "goerli",
    network: "goerli",
    nativeCurrency: {
        decimals: 18,
        name: "ETH",
        symbol: "ETH"
    },
    rpcUrls: {
        default: { http: [parseEnvVariable(process.env.NEXT_PUBLIC_GOERLI_RPC_URL)] },
        public: { http: [parseEnvVariable(process.env.NEXT_PUBLIC_GOERLI_RPC_URL)] }
    },
    blockExplorers: {
        default: { name: "GoerliBlockExplorer", url: "https://goerli.etherscan.io" }
    }
} as const satisfies Chain;
