import cn from "classnames";

import "./Divider.scss";

interface IDividerProps {
    type: "flow" | "target";
    count?: number;
    className?: string;
    flexDirection?: "row" | "column";
    gradientDirection: "left" | "right";
    scrollable?: boolean;
    inView?: boolean;
}

const Divider = ({ inView, type, count, className, gradientDirection, flexDirection = "row" }: IDividerProps) => {
    return (
        <div
            className={cn("DividerWrapper", flexDirection === "row" && "row", flexDirection === "column" && "column", className)}
        >
            {type === "flow" && (
                <>
                    <div className={cn("DividerWrapper-Dot", "MainDot", gradientDirection === "left" && "op-4")} />
                    <div className="DividerWrapper-Dot MainDot op-8" />
                    <div className={cn("DividerWrapper-Dot", "MainDot", gradientDirection === "right" && "op-4")} />
                </>
            )}
            {type === "target" && (
                <>
                    {[...new Array(count)].map((item, i) => (
                        <div
                            key={i}
                            className={cn(
                                "MainDot",
                                `DividerWrapper-Dot${i + 1}`,
                                inView && `DividerWrapper-Dot${i + 1}_in-view`
                            )}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Divider;
