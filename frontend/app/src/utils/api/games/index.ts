import gamesService from "@/services/games/games.service";

export const getGames = async () => {
    return await gamesService.getGames();
};

export const getGameById = async (id: string) => {
    return await gamesService.getGameById(id);
};

export const createGame = async (game: any) => {
    return await gamesService.createGame(game);
};

export const updateGame = async (id: string, game: any) => {
    return await gamesService.updateGame(id, game);
};

export const deleteGame = async (id: string) => {
    return await gamesService.deleteGame(id);
};
