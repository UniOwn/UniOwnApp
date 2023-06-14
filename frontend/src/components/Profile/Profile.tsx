import React from "react";

import profileContent from "../../images/profile/profile-content.png";

import "./Profile.scss";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="Profile">
            <img src={profileContent} alt="" />
            <div className="PassportButton" onClick={() => navigate("/app/passport")}>
                Passport
            </div>
        </div>
    )
}

export default Profile;
