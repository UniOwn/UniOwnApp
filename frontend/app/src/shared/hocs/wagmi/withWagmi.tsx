import { WagmiConfig } from "wagmi";

import config from "@/config/network/configure-chains/configure-chains.config";

const withWagmi = <T extends object>(Component: React.FC<T>) => {
    const Wrapper = (props: T) => {
        return (
            <WagmiConfig config={config}>
                <Component {...props} />
            </WagmiConfig>
        );
    };

    return Wrapper;
};

export default withWagmi;
