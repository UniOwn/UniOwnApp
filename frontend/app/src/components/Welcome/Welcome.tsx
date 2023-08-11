import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png";
import footer from "../../images/landing/footer.png";
import roadmap from "../../images/landing/roadmap.png";
import howItWorks from "../../images/landing/how-it-works.png";
import benefitsForUser from "../../images/landing/benefits-for-user.png";
import benefitsForClient from "../../images/landing/benefits-for-client.png";

import "./Welcome.scss";

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    const onLaunchAppClick = useCallback(() => {
        navigate('/app');
    }, [navigate]);

    return (
        <div className="Landing min-h-full">
            <header className="Landing-Header">
                <div className="Landing-Header_Content">
                    <img src={logo} alt="" height={40} width={138} />
                    <div className="Landing-Header_Controls">
                        <div onClick={onLaunchAppClick} className="LaunchApp">
                            Launch App
                        </div>
                    </div>
                </div>
            </header>

            <main className="Landing-Main">
                <div className="Landing-Main_Introduce">
                    <div className="Introduce-Wrapper">
                        <div className="Introduce-Header">
                            Reducing the entry threshold
                            in Mantle ecosystem
                        </div>
                        <div className="Introduce-Description">
                            With Mantle Network, an Ethereum rollup, Mantle Treasury and a
                            token holder governed roadmap for products and initiatives.
                        </div>
                    </div>
                    <div className="Introduce-ViewDocs">
                        View Docs
                    </div>
                </div>

                <div className="Landing-Main_HowItWorks">
                    <div className="HowItWorks-Header">
                        How it works
                    </div>
                    <img src={howItWorks} alt="" height={745} width={1600} />
                </div>

                <div className="Landing-Main_Benefits">
                    <div className="Benefits-Header">
                        Platform Benefits
                    </div>
                    <div className="Benefits-Content">
                        <img src={benefitsForUser} alt="" width={691} height={395} />
                        <img src={benefitsForClient} alt="" width={691} height={395} />
                    </div>
                </div>

                <div className="Landing-Main_Roadmap">
                    <div className="Roadmap-Header">
                        Roadmap
                    </div>
                    <img src={roadmap} alt="" />
                </div>

                <div className="Landing-Main_Newseller">
                    <div className="Newseller-Header">
                        Join Our Newseller
                    </div>
                    <div className="Newseller-Content">
                        <div>
                            <input className="EmailInput" type="text" placeholder="Enter your email" />
                        </div>
                        <div className="ToJoin">
                            To Join
                        </div>
                    </div>
                </div>
            </main>

            <footer className="Landing-Footer">
                <img src={footer} alt="" width={1430} height={248} />
            </footer>
        </div>
    )
};

export default memo(Welcome);
