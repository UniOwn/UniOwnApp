import { ethers } from "ethers";
import { Contract, Provider, setMulticallAddress } from "ethers-multicall";

import UniOwnPool from "../config/abi/UniOwnPool.json";
import UniOwnPoolFactoryABI from "../config/abi/UniOwnPoolFactoryABI.json";
import { FACTORY_ADDRESS, MULTICALL_ADDRESS, RPC_ADDRESS } from "../config/constants/address";
import IPool, { poolPropertyNames } from "../models/Pool";

const CHAIN_ID = 5001;
const TOTAL_DATA_DISPLAY = 5;

const PrepareResponse = <T>(data: T) => new Response(JSON.stringify(data));

export const getTotalPools = async () => {
    setMulticallAddress(CHAIN_ID, MULTICALL_ADDRESS[CHAIN_ID]);
    const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_ID]);
    const ethcallProvider = new Provider(provider);

    await ethcallProvider.init();

    const tokenContract = new Contract(FACTORY_ADDRESS[CHAIN_ID], UniOwnPoolFactoryABI);

    try {
        const numberCall = await tokenContract.getNumberOfPoolsDeployed();
        const [number] = await ethcallProvider.all([numberCall]);

        return {
            success: true,
            data: { number: number.toNumber() }
        };
    } catch (error) {
        return {
            success: false,
            data: { token: 0 }
        };
    }
};

export const getPoolList = async () => {
    let START = 0,
        END = 0;

    try {
        const totalData = await getTotalPools();

        if (totalData.success) {
            if (totalData.data.number < TOTAL_DATA_DISPLAY) {
                START = 0;
                END = totalData.data.number;
            } else {
                END = totalData.data.number >= TOTAL_DATA_DISPLAY ? totalData.data.number : TOTAL_DATA_DISPLAY;
                START = totalData.data.number >= TOTAL_DATA_DISPLAY ? totalData.data.number - TOTAL_DATA_DISPLAY : 0;
            }
        }
    } catch (error) {
        throw error;
    }
    setMulticallAddress(CHAIN_ID, MULTICALL_ADDRESS[CHAIN_ID]);
    const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_ID]);
    const ethcallProvider = new Provider(provider);

    await ethcallProvider.init();

    const factoryContract = new Contract(FACTORY_ADDRESS[CHAIN_ID], UniOwnPoolFactoryABI);

    try {
        const tokenCall = await factoryContract.getAllPools(START, END);
        const [token] = await ethcallProvider.all([tokenCall]);

        return PrepareResponse(token);
    } catch (error) {
        throw error;
    }
};

export const getPoolsInfo = async (addresses: string[]) => {
    setMulticallAddress(CHAIN_ID, MULTICALL_ADDRESS[CHAIN_ID]);
    const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_ID]);
    const ethcallProvider = new Provider(provider);

    await ethcallProvider.init();

    const calls = addresses.map(a => new Contract(a, UniOwnPool).pool());

    try {
        const response = await ethcallProvider.all(calls);

        const pools: IPool[] = response.map((r, i) => {
            const pool: IPool = { address: addresses[i] } as IPool;
            poolPropertyNames.forEach(n => {
                pool[n] = r[n];
            });

            return pool;
        });

        return PrepareResponse(pools);
    } catch (error) {
        throw error;
    }
};

export const onPayToJoinPool = async () => {
    return true;
};
