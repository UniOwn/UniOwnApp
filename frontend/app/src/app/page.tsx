import { getCurrentUser } from "@/utils/api/users";
import { HomePage } from "@/components/Pages";

export default async function Home() {
    const user = await getCurrentUser();

    return (
        <main className="h-full w-full pb-10">
            <HomePage user={user} />
        </main>
    );
}
