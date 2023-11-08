import { buildEndpoint } from "@/utils";
import { userEndpoints } from "@/config";
import { IUser } from "@/models/user/user.interface";

import BaseService from "../base/base.service";

class UsersService extends BaseService {
    getUsers() {
        const url = buildEndpoint(userEndpoints.get);

        return super.get<IUser[]>(url);
    }

    getUserById(id: string) {
        const url = buildEndpoint(userEndpoints.getById, { id });

        return super.get<IUser>(url);
    }

    createUser(user: IUser) {
        const url = buildEndpoint(userEndpoints.create);

        return super.post<IUser>(url, JSON.stringify(user));
    }

    updateUser(id: string, user: IUser) {
        const url = buildEndpoint(userEndpoints.update, { id });

        return super.put<IUser>(url, JSON.stringify(user));
    }

    deleteUser(id: string) {
        const url = buildEndpoint(userEndpoints.delete, { id });

        return super.delete(url);
    }
}

export default new UsersService();
