import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { getLikeColor } from "@/utils";
import { IGame } from "@/models/game/game.interface";

import BnbChainLogo from "../../../../public/images/chains/bnb.svg";

import "./GameCard.style.scss";

interface IGameCardProps extends IGame {
    isLiked?: boolean;
}

const GameCard = ({ name, isFeatured, ownerName, chainId, isLiked, imageLink, assetsCount }: IGameCardProps) => {
    const likeColor = getLikeColor(isFeatured, isLiked);
    const backgroundCardColor = isFeatured ? "#1263FE" : "#1F1F1F";

    return (
        <div className="GameCard p-2 w-80 h-80 relative box-border" style={{ background: backgroundCardColor }}>
            <HeartIcon className="absolute z-20 top-4 right-6 w-10 h-10 cursor-pointer" color={likeColor} />
            <Card isPressable className="GameCard-Container w-full h-full">
                <CardHeader className="absolute z-10 top-1 flex-row items-center gap-1.5 mx-8 py-3 px-0 w-fit">
                    <Image className="w-6 h-6 z-10" alt="Chain logo" src={BnbChainLogo.src} />
                    <p className="text-tiny uppercase font-bold">{chainId}</p>
                </CardHeader>
                <CardBody className="absolute z-10 bottom-9 flex-col items-start gap-0.5 px-8">
                    <Chip color={isFeatured ? "primary" : "default"}>Items {assetsCount}</Chip>
                    <p className="font-bold text-large capitalize">{name}</p>
                </CardBody>
                <CardFooter
                    className="GameCard-Container_Footer absolute z-10 bottom-0 w-full py-2.5 px-8"
                    style={{
                        background: isFeatured
                            ? "linear-gradient(91.74deg, #4384FF 43.75%, rgba(67, 132, 255, 0) 91.23%)"
                            : "linear-gradient(89.66deg, #282828 31.54%, rgba(40, 40, 40, 0) 103.95%)"
                    }}
                >
                    <p className="font-bold text-large capitalize truncate">Listed by {ownerName}</p>
                </CardFooter>
                <Image removeWrapper alt="Card background" className="GameCard-Container_Image z-0 w-full h-full object-cover" src={imageLink} />
            </Card>
        </div>
    );
};

export default GameCard;
