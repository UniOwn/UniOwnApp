import { getPoolList } from "../services/NftService";

import useExecuteQuery from "./useExecuteQuery";

const useAddresses = () => {
    const {
        data: addresses,
        error: addressesError,
        isLoading: isAddressesLoading,
        clearError: clearAddressesError
    } = useExecuteQuery<string[]>(getPoolList, { shouldPerform: true });

    return {
        addresses,
        addressesError,
        isAddressesLoading,
        clearAddressesError
    };
};

export default useAddresses;
