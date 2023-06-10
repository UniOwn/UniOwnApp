import routes from "./routes";

interface INav {
    path: string;
    title: string;
}

const nav: INav[] = [
    {
        path: routes.app,
        title: "Pools"
    },
    {
        path: routes.passport,
        title: "Passport"
    },
    {
        path: routes.profile,
        title: "Profile"
    }
];

export default nav;
