"use client";

import cn from "classnames";
import { useInView } from "react-intersection-observer";

import { misto } from "@/fonts";

import "./Explore.scss";

const Explore = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="ExploreSection">
            <span ref={ref} className={cn("ExploreSection-Heading", misto.className, inView && "active")}>
                explore
            </span>
        </section>
    );
};

export default Explore;
