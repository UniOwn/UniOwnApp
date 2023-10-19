"use client";

import { useEffect } from "react";

import { SearchInput } from "../Controls";

import "./AppHeader.style.scss";

interface IUser {
    id: string;
    name: string;
}

const AppHeader = () => {
    useEffect(() => {
        const loadUsers = async () => {
            const response = await fetch("http://localhost:5005/users");
            const users: IUser[] = await response.json();

            // eslint-disable-next-line no-console
            console.log(users[0]?.id);
        };

        loadUsers();
    }, []);

    return (
        <div className="AppHeader">
            <SearchInput />
        </div>
    );
};

export default AppHeader;
