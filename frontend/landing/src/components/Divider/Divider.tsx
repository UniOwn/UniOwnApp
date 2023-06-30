import cn from "classnames";

import "./Divider.scss";

interface IDividerProps {
    type: "flowDesktop" | "flowMobile";
    className?: string;
    flexDirection?: "row" | "column";
    gradientDirection?: "left" | "right";
}

const Divider = ({ type, className, gradientDirection, flexDirection = "row" }: IDividerProps) => {
    return (
        <div
            className={cn("DividerWrapper", flexDirection === "row" && "row", flexDirection === "column" && "column", className)}
        >
            {type === "flowDesktop" && (
                <>
                    <div className={cn("DividerWrapper-Dot", "MainDot", gradientDirection === "left" && "op-4")} />
                    <div className="DividerWrapper-Dot MainDot op-8" />
                    <div className={cn("DividerWrapper-Dot", "MainDot", gradientDirection === "right" && "op-4")} />
                </>
            )}
            {type === "flowMobile" && (
                <div className="DividerWrapper-Mobile">
                    <div className="DividerWrapper-Mobile_container">
                        {[...new Array(5)].map((item, i) => (
                            <div key={i} className={cn("DividerWrapper-Mobile_container-dot")} />
                        ))}
                    </div>
                    <div className="DividerWrapper-Mobile_container">
                        {[...new Array(3)].map((item, i) => (
                            <div key={i} className={cn("DividerWrapper-Mobile_container-dot", "op-8")} />
                        ))}
                    </div>
                    <div className={cn("DividerWrapper-Mobile_container-dot", "op-4")} />
                </div>
            )}
        </div>
    );
};

export default Divider;
