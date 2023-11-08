import { GameCard } from "@/components/Cards";
import { IUser } from "@/models/user/user.interface";
import gamesService from "@/services/games/games.service";

interface IHomeProps {
    user: IUser | null;
}

const Home = async ({ user }: IHomeProps) => {
    const games = await gamesService.getGames();

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <section className="w-full"></section>
            <section className="grid grid-cols-4 gap-x-8 gap-y-4">
                {games.map(game => (
                    <GameCard key={game.id} isLiked={user?.likedGameIds?.includes(game.id)} {...game} />
                ))}
            </section>
        </div>
    );
};

export default Home;
