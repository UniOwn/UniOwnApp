import cn from "classnames";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { gilroy } from "@/fonts";
import strings from "@/config/strings";
import "./JoinUs.scss";

const JoinUs = () => {
    const { ref: joinUsButton, inView: joinUsButtonInView } = useInView({ triggerOnce: true });

    return (
        <Link
            ref={joinUsButton}
            href="https://twitter.com/UniOwnProtocol"
            target="_blank"
            className={cn("JoinUsButton", gilroy.className, joinUsButtonInView && "in-view")}
        >
            {strings.drownBlock.container.joinButton}
        </Link>
    );
};

export default JoinUs;
