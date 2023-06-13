// export const FACTORY_ADDRESS = {
//     [`${process.env.FACTORY_ADDRESS_PORT}`]: process.env.FACTORY_ADDRESS_VALUE
// };

import { parseEnvVariable } from "@/utils/utils";

// export const RPC_ADDRESS = {
//     [process.env.RPC_ADDRESS_PORT || ""]: process.env.RPC_ADDRESS_VALUE
// };

// export const MULTICALL_ADDRESS = {
//     [process.env.MULTICALL_ADDRESS_PORT || ""]: process.env.MULTICALL_ADDRESS_VALUE
// };

// export const MARKETPLACE_ADDRESS = {
//     [process.env.MARKETPLACE_ADDRESS_PORT || ""]: process.env.MARKETPLACE_ADDRESS_VALUE
// };

export const NFT_ADDRESS = {
    [parseEnvVariable(process.env.NEXT_PUBLIC_NFT_ADDRESS_PORT)]: process.env.NEXT_PUBLIC_NFT_ADDRESS_VALUE
};
