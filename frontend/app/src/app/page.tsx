import { getServerSession } from "next-auth";

import { AssetCard } from "@/components/Cards";
import ConnectWalletButton from "@/components/Buttons/ConnectToWallet/ConnectToWallet";

import { authOptions } from "./api/auth/[...nextauth]/route";

async function getData() {
    const session: any = await getServerSession(authOptions);

    const res = await fetch("http://localhost:5005/users/653fe7869fb4efe4ffe2e1ff", {
        method: "GET",
        headers: { authorization: `Bearer ${session?.tokens.access_token}`, "Content-Type": "application/json" }
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            <ConnectWalletButton />
            {data?.username && <AssetCard username={data?.username} />}
        </main>
    );
}
