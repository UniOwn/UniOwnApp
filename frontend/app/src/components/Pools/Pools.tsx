import { useNavigate } from "react-router-dom";
import React, { useCallback, useContext } from "react";

import AppContext from "../../context/context";
import useAddresses from "../../hooks/useAddresses";
import usePoolsInfo from "../../hooks/usePoolsInfo";

import Pool from "./Pool/Pool";

import "./Pools.scss";
import { Spinner, SpinnerSize } from "@fluentui/react";

const Pools: React.FC = () => {
    const navigate = useNavigate();
    const {
        onSetPools
    } = useContext(AppContext)

    const {
        addresses,
        isAddressesLoading
    } = useAddresses();
    const {
        pools,
        isPoolsLoading
    } = usePoolsInfo(addresses || [], !!addresses);

    const isLoading = isPoolsLoading || isAddressesLoading;

    const onJoinPool = useCallback((address: string) => {
        onSetPools(pools || []);
        navigate(`/app/pools/${address}`);
    }, [pools, navigate, onSetPools]);

    return (
        <div className="Pools-Wrapper">
            {isLoading ? (
                <Spinner size={SpinnerSize.large} className="Loader"/>
            ) : (
                <>
                    {pools?.map(p => (
                        <Pool key={p.address} pool={p} onClick={() => onJoinPool(p.address)} />
                    ))}
                </>
            )}
        </div>
    );
};

export default Pools;
