import React from "react";

import IPool from "../../../models/Pool";
import PoolMain from "./PoolMain/PoolMain";
import PoolAdditional from "./PoolAdditional/PoolAdditional";

import "./Pool.scss";

export interface IPoolProps {
    pool: IPool;
    onClick: () => void;
}

const Pool: React.FC<IPoolProps> = ({ pool, onClick }) => {
    return (
        <div className="Pool-Container" onClick={onClick}>
            <PoolMain pool={pool} />
            <PoolAdditional pool={pool} />
        </div>
    );
};

export default Pool;
