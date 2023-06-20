import cn from "classnames";

import { kica, misto, gilroy } from "@/fonts";
import strings from "@/config/strings";

import "./Main.scss";

const Main = () => {
    return (
        <div className="MainSection">
            <div className="MainSection-Label">
                <pre className={kica.className}>
                    Reducing the <span className={misto.className}>entrance</span>
                    {"\n"}
                    threshold in Mantle
                    {"\n"}
                    <span className={misto.className}>ecosystem</span>
                </pre>
            </div>
            <div className={cn("MainSection-Description", gilroy.className)}>{strings.mainBlock.description}</div>
        </div>
    );
};

export default Main;
