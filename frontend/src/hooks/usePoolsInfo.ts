import IPool from "../models/Pool";
import { getPoolsInfo } from "../services/NftService";

import useExecuteQuery from "./useExecuteQuery";

const usePoolsInfo = (addresses: string[], shouldPerform: boolean) => {
    const {
        data: pools,
        error: poolsError,
        isLoading: isPoolsLoading,
        clearError: clearPoolsError
    } = useExecuteQuery<IPool[]>(getPoolsInfo, { shouldPerform }, addresses);

    return {
        pools,
        poolsError,
        isPoolsLoading,
        clearPoolsError
    };
};

export default usePoolsInfo;
