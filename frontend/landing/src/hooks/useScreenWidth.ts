import { useState, useEffect } from "react";

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const updateDimension = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);

    return screenWidth;
};

export default useScreenWidth;
