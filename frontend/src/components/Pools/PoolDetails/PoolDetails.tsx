import React, { useCallback, useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import AppContext from "../../../context/context";

import mainIcon from "../../../images/pool-details/main-icon.png";
import joinedMainIcon from "../../../images/pool-details/joined-main-icon.png";
// import voteIcon from "../../../images/pool-details/vote-icon.png";
import dividents from "../../../images/pool-details/dividends.png";
import agreeButton from "../../../images/pool-details/agree-button.png";
import disabledChat from "../../../images/pool-details/disabled-chat.png";

import Chat from "../../Chat/Chat";
import useConversation from "../../../hooks/useConversation";
import { formatHexIntoDecimal, getShortAddress } from "../../../utils/utils";

import "./PoolDetails.scss";

const proposals = [
    { name: "QIP-021 To rent an NFT for 2 days", status: "Active", votes: "No votes submited" },
    { name: "QIP-021 To rent an NFT for 2 days", status: "Active", votes: "No votes submited" },
    { name: "QIP-021 To rent an NFT for 2 days", status: "Active", votes: "No votes submited" }
];

const PoolDetails: React.FC = () => {
    const { poolId } = useParams();
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isParticipant, setParticipant] = useState<boolean>(false);
    const { findPoolById } = useContext(AppContext);

    const {
        conversation
    } = useConversation("internal_conversation_1685185853695");

    const pool = useMemo(() => (
        findPoolById(poolId)
    ), [findPoolById, poolId])

    const onParticipate = useCallback(() => {
        setShowPopup(!showPopup);
        setParticipant(true);
    }, [showPopup]);

    const shortAddress = useMemo(() => getShortAddress(pool?.collection || ""), [pool?.collection]);

    return (
        <div className="PoolDetails">
            <div className="PoolDetails-Main">
                <div className="PoolDetails-Main_Data">
                    <img src={isParticipant ? joinedMainIcon : mainIcon} alt="" className={isParticipant ? "JoinedMainIcon" : "MainIcon"} />
                    {!isParticipant ? (
                        <>
                            <div className="PoolData">
                                <div className="PoolData-Detail Address flex-column">
                                    <span className="PoolData-Detail_AddressLabel color-white">NFT address</span>
                                    <span className="PoolData-Detail_AddressValue main-pool-value">{shortAddress}</span>
                                </div>
                                <div className="PoolData-Detail Token flex-column">
                                    <span className="PoolData-Detail_Label color-white">Token ID</span>
                                    <span className="PoolData-Detail_Value main-pool-value">{formatHexIntoDecimal(pool?.tokenId || 0)}</span>
                                </div>
                                <div className="PoolData-Detail MinParticipation flex-column">
                                    <span className="PoolData-Detail_Label color-white">Min Participation</span>
                                    <span className="PoolData-Detail_Value main-pool-value">{formatHexIntoDecimal(pool?.minParticipation || 0)} BIT</span>
                                </div>
                            </div>
                            <div className="ToParticipate" onClick={() => setShowPopup(!showPopup)}>
                                To Participate
                            </div>
                            {showPopup && (
                                <div id="popup" className="ParticipantPopup">
                                    <div className="Header">
                                        The Amount
                                    </div>
                                    <input type="text" placeholder="Enter The Amount in BIT" className="AmountInput" />
                                    <img src={agreeButton} alt="" className="AgreeButton" width={98} height={31} onClick={onParticipate} />
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="JoinedPoolData">
                                <img src={dividents} alt="" width={157} height={233} />
                                <div className="ProposalsContainer">
                                    <div className="Header">
                                        <div className="HeadingLabel">
                                            Proposals
                                        </div>
                                        <div className="SeeAllLabel">
                                            see all
                                        </div>
                                    </div>
                                    <div className="Main">
                                        {proposals.map(p => (
                                            <div className="ProposalDetails">
                                                <div className="ProposalWrapper">
                                                    <div className="ProposalContent">
                                                        <div className="ProposalHeader">
                                                            {p.name}
                                                        </div>
                                                        <div className="ProposalStatus">
                                                            <div className="Status">{p.status}</div>
                                                            <div className="Votes">{p.votes}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <img src={voteIcon} alt="" width={35} height={20} /> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="PoolDetails-Main_DisabledChat">
                    {isParticipant ? (
                        <Chat conversation={conversation} />
                    ) : (
                        // <Chat disabled conversation={conversation} />
                        <img src={disabledChat} alt="" />
                    )}
                </div>
            </div>
        </div>
    )
};

export default PoolDetails;
