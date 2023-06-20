import "./Launch.scss";

const Launch = () => {
    return (
        <div className="LaunchWrapper">
            <div className="LaunchWrapper-Soon KicaBold">SOON</div>
            <div className="LaunchWrapper-Container">
                <div className="LaunchWrapper-Container_dots">
                    <div className="dot"></div>
                    <div className="dot op-8"></div>
                    <div className="dot op-4"></div>
                </div>
                <div className="LaunchWrapper-Container_button GilroySemibold">Launch App</div>
            </div>
        </div>
    );
};

export default Launch;
