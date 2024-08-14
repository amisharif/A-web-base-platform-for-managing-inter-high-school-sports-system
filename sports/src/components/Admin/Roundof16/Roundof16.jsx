import React, { useContext } from "react";
import useKnockoutMatch from "../../customHook/useKnockoutMatch";
import KnockoutMatchCard from "../KnockoutMatchCard/KnockoutMatchCard";
import useGroupClone from "../../customHook/useGroupClone";


const Roundof16 = () => {
    const [knockoutMatch, refetch] = useKnockoutMatch();
    const [groupClone] = useGroupClone();

    const groupStage47home = groupClone[47]?.homeScore;
    const groupStage47away = groupClone[47]?.awayScore;
  

    return (
        <div className="bg-slate-200 w-full">
            <h2 style={{ marginLeft: "350px" }} className="font-bold py-5">
                {" "}
                Round of 16
            </h2>

            {groupStage47home !== -1 && groupStage47away !== -1 ? (
                knockoutMatch.map((match, index) => {
                    if (index <= 7) {
                        return (
                            <KnockoutMatchCard
                                key={index}
                                team1={match.eiin1}
                                team2={match.eiin2}
                                index={index}
                            ></KnockoutMatchCard>
                        );
                    }
                })
            ) : (
                <h2
                    style={{ marginLeft: "350px" }}
                    className="font-bold py-5 mt-24 text-red-500 text-3xl"
                >
                    {" "}
                    Round of 16 is not started yet.
                </h2>
            )}

            {/* {knockoutMatch.map((match, index) => {
                if (index <= 7) {
                    return (
                        <KnockoutMatchCard
                            key={index}
                            team1={match.eiin1}
                            team2={match.eiin2}
                            index={index}
                        ></KnockoutMatchCard>
                    );
                }
            })} */}
        </div>
    );
};

export default Roundof16;
