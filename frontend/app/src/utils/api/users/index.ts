import { getServerSession } from "next-auth";

import { IUser } from "@/models/user/user.interface";
import usersService from "@/services/users/users.service";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IExtendedSession } from "@/models/extended-session/extended-session.interface";

export const getCurrentUser = async (): Promise<IUser | null> => {
    const session: IExtendedSession | null = await getServerSession(authOptions);

    if (session) {
        const { userId } = session;

        return userId ? await usersService.getUserById(userId) : null;
    }

    return null;
};

export const getUsers = async () => {
    return await usersService.getUsers();
};

export const getUserById = async (id: string) => {
    return await usersService.getUserById(id);
};

export const createUser = async (user: any) => {
    return await usersService.createUser(user);
};

export const updateUser = async (id: string, user: any) => {
    return await usersService.updateUser(id, user);
};

export const deleteUser = async (id: string) => {
    return await usersService.deleteUser(id);
};
