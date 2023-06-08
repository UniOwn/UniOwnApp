import React, { memo, useCallback, useState } from "react";
import { providers } from "ethers";
import { useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

import passportContent from "../../images/passport/passport-content.png";

import nftAbi from "../../config/abi/NFTABI.json";
import { NFT_ADDRESS } from "../../config/constants/address";

import "./Passport.scss";
import { Spinner } from "@fluentui/react";

const CHAIN_ID = 5001;

const Passport: React.FC = () => {
    const { account, library } = useEthers();
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleMint = async () => {
        const contract = new Contract(
            NFT_ADDRESS[CHAIN_ID],
            nftAbi,
            (library as providers.JsonRpcProvider)?.getSigner()
        );

        try {
            setLoading(true);
            const mint = await contract.mint();
            await mint.wait();
            setLoading(false);
        } catch (ex) {
            setLoading(false);
            console.error(ex);
        }
    };

    const mint = useCallback(handleMint, [library]);

    return (
        <div className="Passport">
            <img src={passportContent} alt="" />
            <div className="MintNow" onClick={mint}>
                Mint Now
                {isLoading && (<Spinner />)}
            </div>
        </div>
    );
};

export default memo(Passport);
