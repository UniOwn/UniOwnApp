import { useWalletClient, Chain } from "wagmi";
import { EIP1193RequestFn, TransportConfig } from "viem";

import withWagmi from "@/hooks/wagmi/withWagmi";

interface ISignerDetails {
    address: string | undefined;
    transport: (TransportConfig<string, EIP1193RequestFn> & Record<string, any>) | undefined;
    chain: Chain | undefined;
}

const Buy = () => {
    const client = useWalletClient();

    const sendSigner = () => {
        const signerDetails: ISignerDetails = {
            address: client.data?.account.address.toString(),
            transport: client.data?.transport,
            chain: client.data?.chain
        };

        fetch("https://6b9e-89-64-83-17.ngrok-free.app/pools", {
            method: "POST",
            headers: [["Content-Type", "application/json"]],
            body: JSON.stringify(signerDetails)
        });
    };

    return (
        <div>
            <button onClick={sendSigner}>Send Signer</button>
        </div>
    );
};

export default withWagmi(Buy);
