import { useState, useCallback } from "react";

import db from "../database/db";
import IDataBase from "../models/db";
import actions from "../database/actions";
import reducer from "../database/reducer";

const useDataBase = () => {
    const [database, setDatabase] = useState<IDataBase>(db);

    const onChangeDatabase = <T>(action: { payload: T; type: actions }) => {
        const newDatabase = reducer(action, database);

        setDatabase(newDatabase);
    };

    const onGetData = useCallback(
        <T>(name: string) => {
            return database[name] as T;
        },
        [database]
    );

    return {
        onGetData,
        onChangeDatabase
    };
};

export default useDataBase;
