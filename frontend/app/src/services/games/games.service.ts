import { buildEndpoint } from "@/utils";
import { gameEndpoints } from "@/config";
import { IGame } from "@/models/game/game.interface";

import BaseService from "../base/base.service";

class GamesService extends BaseService {
    getGames() {
        const url = buildEndpoint(gameEndpoints.get);

        return super.get<IGame[]>(url);
    }

    getGameById(id: string) {
        const url = buildEndpoint(gameEndpoints.getById, { id });

        return super.get<IGame>(url);
    }

    createGame(game: IGame) {
        const url = buildEndpoint(gameEndpoints.create);

        return super.post<IGame>(url, JSON.stringify(game));
    }

    updateGame(id: string, game: IGame) {
        const url = buildEndpoint(gameEndpoints.update, { id });

        return super.put<IGame>(url, JSON.stringify(game));
    }

    deleteGame(id: string) {
        const url = buildEndpoint(gameEndpoints.delete, { id });

        return super.delete(url);
    }
}

export default new GamesService();
