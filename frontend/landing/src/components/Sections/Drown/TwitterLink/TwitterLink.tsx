import { memo } from "react";
import Image from "next/image";

import useScreenWidth from "@/hooks/useScreenWidth";
import JoinUs from "@/components/Buttons/JoinUs/JoinUs";

import twitterLink from "../../../../../public/images/twitter-link.png";
import twitterLinkMobile from "../../../../../public/images/twitter-link-mobile.png";
import "./TwitterLink.scss";

const TwitterLink = () => {
    const screenWidth = useScreenWidth();

    return (
        <div className="DrownSection-Container_logo">
            <JoinUs />
            {screenWidth > 1200 ? (
                <Image src={twitterLink} alt="" priority sizes="100vw" className="TwitterLink" />
            ) : (
                <Image src={twitterLinkMobile} alt="" priority sizes="100vw" className="TwitterLink" />
            )}
        </div>
    );
};

export default memo(TwitterLink);
