import React, { memo, useMemo } from "react";

import IPool from "../../../../models/Pool";
import { formatHexIntoDecimal } from "../../../../utils/utils";
import poolStatistics from "../../../../images/pools/pool-statistics.png";

import './PoolAdditional.scss';

export interface IPoolAdditionalProps {
    pool: IPool;
}

const PoolAdditional: React.FC<IPoolAdditionalProps> = ({ pool }) => {
    const endsInHeight = useMemo(() => Math.random() * 100, []);

    const amountHeight = useMemo(() => (formatHexIntoDecimal(pool.totalAmount) / formatHexIntoDecimal(pool.maxAmount)) * 100, [pool.totalAmount, pool.maxAmount]);

    return (
        <div className="PoolAdditional-Wrapper">
            <img src={poolStatistics} alt="" height={40} width={130} />
            <div className="PoolAdditional-Statistics">
                <div className="PoolAdditional-Statistics_Straw">
                    <div className="PoolAdditional-Statistics_Straw-Background-EndsIn" style={{ height: `${endsInHeight}%` }}>
                        <div className="PoolAdditional-Statistics_StrawValue-EndsIn" style={{ height: `${endsInHeight}%` }} />
                    </div>
                </div>
                <div className="PoolAdditional-Statistics_Straw">
                    <div className="PoolAdditional-Statistics_Straw-Background-Amount" style={{ height: `${amountHeight}%`}}>
                        <div className="PoolAdditional-Statistics_StrawValue-Amount" style={{ height: `${amountHeight}%`}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(PoolAdditional);
