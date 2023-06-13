"use client";

import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

import { NFT_ADDRESS } from "@/config/constants/address";
import nftAbi from "@/config/abi/NFTABI.json";
import withWagmi from "@/hooks/wagmi/withWagmi";

const CHAIN_ID = 5001;

const MintNft = () => {
    const {
        config,
        error: prepareError,
        isError: isPrepareError
    } = usePrepareContractWrite({
        address: NFT_ADDRESS[CHAIN_ID] as `0x${string}`,
        abi: nftAbi,
        functionName: "mint",
        enabled: true
    });

    const { data, write, error, isError } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash
    });

    return (
        <>
            <button disabled={!write || isLoading} onClick={() => write?.()}>
                {isLoading ? "Minting..." : "Mint"}
            </button>
            {isSuccess && <div>Successfully minted your NFT!</div>}
            {(isPrepareError || isError) && <div>Error: {(prepareError || error)?.message}</div>}
        </>
    );
};

export default withWagmi(MintNft);
