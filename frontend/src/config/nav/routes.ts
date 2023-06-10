interface IRoutes {
    home: string;
    app: string;
    profile: string;
    passport: string;
}

const routes: IRoutes = {
    home: "/",
    app: "/app",
    profile: "/app/profile",
    passport: "/app/passport"
};

export default routes;
