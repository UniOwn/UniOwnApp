import React, { memo, useMemo } from "react";

import IPool from "../../../../models/Pool";
import { formatHexIntoDecimal, getShortAddress } from "../../../../utils/utils";

import "./PoolMain.scss";

export interface IPoolMainProps {
    pool: IPool;
}

const PoolMain: React.FC<IPoolMainProps> = ({ pool }) => {
    const shortAddress = useMemo(() => getShortAddress(pool.collection), [pool.collection]);

    return (
        <div className="PoolMain-Wrapper">
            <div className="PoolMain-Details">
                <div className="PoolMain-Details_Address flex-column">
                    <span className="PoolMain-Details_AddressLabel color-white">NFT address</span>
                    <span className="PoolMain-Details_AddressValue main-pool-value">{shortAddress}</span>
                </div>
                <div className="PoolMain-Details_Token flex-column">
                    <span className="PoolMain-Details_TokenLabel color-white">Token ID</span>
                    <span className="PoolMain-Details_TokenValue main-pool-value">{formatHexIntoDecimal(pool.tokenId)}</span>
                </div>
                <div className="PoolMain-Details_MinParticipation flex-column">
                    <span className="PoolMain-Details_MinParticipationLabel color-white">Min Participation</span>
                    <span className="PoolMain-Details_MinParticipationValue main-pool-value">{formatHexIntoDecimal(pool.minParticipation)} BIT</span>
                </div>
            </div>
        </div>
    );
};

export default memo(PoolMain);
