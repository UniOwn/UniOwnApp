import IUser from "../models/User";
import { UserIds } from "../config/userIds";
import { findUserById } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useAuthUser = () => {
    const { data: authUser } = useExecuteQuery<IUser>(findUserById, { shouldPerform: true }, UserIds.internal_user_id1.toString());

    return {
        authUser
    };
};

export default useAuthUser;
