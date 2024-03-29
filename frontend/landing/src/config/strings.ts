import { StaticImageData } from "next/image";

import joinIcon from "../../public/images/slider/join.png";
import securityIcon from "../../public/images/slider/security.png";
import experienceIcon from "../../public/images/slider/experience.png";

interface IAdvantage {
    text: string;
    image: StaticImageData;
}

interface ILink {
    name: string;
    link?: string;
}

interface IFooterSection {
    header: string;
    links: ILink[];
}

interface IDrown {
    description: string;
    advantages: IAdvantage[];
    joinButton: string;
}

interface IPhase {
    header: string;
    description: string;
    additionalInfo?: string;
}

interface IBenefit {
    label: string[];
    benefits: string[];
}

interface IStrings {
    header: {
        launchButtonLabel: string;
    };
    mainBlock: {
        label: string;
        description: string;
    };
    flowBlock: {
        label: string;
        phase1: IPhase;
        phase2: IPhase;
        phase3: IPhase;
    };
    targetsBlock: {
        label: string;
        userBenefits: IBenefit;
        clientBenefits: IBenefit;
    };
    drownBlock: {
        label: string;
        container: IDrown;
    };
    footer: {
        community: IFooterSection;
        resources: IFooterSection;
    };
}

const strings: IStrings = {
    header: {
        launchButtonLabel: "Launch App"
    },
    mainBlock: {
        label: "Reducing the entrance threshold in Mantle ecosystem",
        description: "Unlock the Future of GameFi \n and NFT Trading with UniOwn"
    },
    flowBlock: {
        label: "The flow",
        phase1: {
            header: "ph. 1",
            description: "Explore: Discover GameFi and NFT opportunities"
        },
        phase2: {
            header: "ph. 2",
            description: "Participate: Invest and collaborate in fractional ownership"
        },
        phase3: {
            header: "ph. 3",
            description: "Users recieve a profit according to his share in the NFT"
        }
    },
    targetsBlock: {
        label: "Our targets",
        userBenefits: {
            label: ["for the", "user"],
            benefits: [
                "Diversification: Stakes in liquid NFTs",
                "Access to exclusive games",
                "Opportunity to earn more",
                "Possibility to buy rare NFTs"
            ]
        },
        clientBenefits: {
            label: ["for the", "client"],
            benefits: [
                "Boosting project volume",
                "Ensure user retention",
                "Attracting new unique users",
                "Community engagement",
                "Heightened player activity"
            ]
        }
    },
    drownBlock: {
        label: "Drown into our community",
        container: {
            description:
                "Revolutionizing GameFi and NFT Trading. We're making a pill for the industry, and we want you on board!",
            advantages: [
                {
                    image: securityIcon,
                    text: "Security? We've got you covered. Wrapped NFTs and transparent ownership transfers keep your assets safe."
                },
                {
                    image: experienceIcon,
                    text: "Experience our unique pool purchase method. No more high entry thresholds. Invest a fraction, profit big. It's a game-changer!"
                },
                {
                    image: joinIcon,
                    text: "Why join us? We're rebels breaking barriers. Dive into our vibrant community, where ideas ignite, and friendships flourish."
                }
            ],
            joinButton: "Join us"
        }
    },
    footer: {
        community: {
            header: "Community",
            links: [
                {
                    name: "Twitter",
                    link: "https://twitter.com/UniOwnProtocol"
                },
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/company/uniown/"
                }
            ]
        },
        resources: {
            header: "Resources",
            links: [
                {
                    name: "Docs"
                },
                {
                    name: "GitHub",
                    link: "https://github.com/UniOwn"
                }
            ]
        }
    }
};

export default strings;
