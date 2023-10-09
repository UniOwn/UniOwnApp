import Link from "next/link";
import cn from "classnames";

import { kica, gilroy } from "@/fonts";
import strings from "@/config/strings";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="AppFooter">
            <div className="AppFooter-Container">
                <div className="AppFooter-Container_logo">
                    <div className={cn("FooterLogo", kica.className)}>UniOwn</div>
                    <div className={cn("FooterCurrentYear", gilroy.className)}>{`${new Date().getFullYear()} ©`}</div>
                </div>
                <div className={cn("AppFooter-Container_section", gilroy.className)}>
                    <div className="AppFooter-Container_section-header">{strings.footer.community.header}</div>

                    <div className="AppFooter-Container_section-linkwrapper">
                        {strings.footer.community.links.map(link => (
                            <div key={link.name}>
                                {link.link ? (
                                    <Link
                                        className="AppFooter-Container_section-linkwrapper-link"
                                        target="_blank"
                                        href={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <div className="AppFooter-Container_section-linkwrapper-nolink">{link.name}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cn("AppFooter-Container_section", gilroy.className)}>
                    <div className="AppFooter-Container_section-header">{strings.footer.resources.header}</div>

                    <div className="AppFooter-Container_section-linkwrapper">
                        {strings.footer.resources.links.map(link => (
                            <div key={link.name}>
                                {link.link ? (
                                    <Link
                                        className="AppFooter-Container_section-linkwrapper-link"
                                        target="_blank"
                                        href={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <div className="AppFooter-Container_section-linkwrapper-nolink">{link.name}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
