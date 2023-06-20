import { Chain } from "wagmi";

import { parseEnvVariable } from "@/utils/utils";

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
