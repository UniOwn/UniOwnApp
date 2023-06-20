import { memo } from "react";
import Image from "next/image";

import twitterLink from "@/images/twitter-link.png";
import JoinUs from "@/components/Buttons/JoinUs/JoinUs";

import "./TwitterLink.scss";

const TwitterLink = () => {
    return (
        <div className="DrownSection-Container_logo">
            <JoinUs />
            <Image src={twitterLink} quality={100} alt="" placeholder="blur" className="TwitterLink" />
        </div>
    );
};

export default memo(TwitterLink);
