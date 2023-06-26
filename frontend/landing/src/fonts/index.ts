import localFont from "next/font/local";

const kica = localFont({
    src: [
        {
            path: "./IFKica-Bold.woff",
            weight: "600",
            style: "bold"
        },
        {
            path: "./IFKica-Light.woff",
            weight: "400",
            style: "light"
        },
        {
            path: "./IFKica-Regular.woff",
            weight: "400",
            style: "regular"
        }
    ]
});

const gilroy = localFont({
    src: [
        {
            path: "./Gilroy-Regular.woff",
            weight: "400",
            style: "regular"
        },
        {
            path: "./Gilroy-Semibold.woff",
            weight: "600",
            style: "semibold"
        }
    ]
});

const misto = localFont({
    src: [
        {
            path: "./Misto.woff",
            weight: "600",
            style: "normal"
        }
    ]
});

export { kica, gilroy, misto };
