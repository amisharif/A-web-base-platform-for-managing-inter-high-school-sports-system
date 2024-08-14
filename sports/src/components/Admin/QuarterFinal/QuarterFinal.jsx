import React, { useContext } from "react";
import useKnockoutMatch from "../../customHook/useKnockoutMatch";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import FixtureCard from "../FixtureCard/FixtureCard";
import KnockoutMatchCard from "../KnockoutMatchCard/KnockoutMatchCard";
import { Link, NavLink } from "react-router-dom";
import useGroupClone from "../../customHook/useGroupClone";

const QuarterFinal = () => {
    const [knockoutMatch, refetch] = useKnockoutMatch();
    // console.log(knockoutMatch);
    const knockOut7score1 = knockoutMatch[7]?.goals_scored1;
    const knockOut7score2 = knockoutMatch[7]?.goals_scored2;

    return (
        <div className="bg-slate-200 w-full">
            {knockOut7score1!==-1? <h2 style={{ marginLeft: "350px" }} className="font-bold py-5">
                Quarter Final
            </h2>:""}
           

            {knockOut7score1 !== -1 && knockOut7score2 !== -1 ? (
                knockoutMatch.map((match, index) => {
                    if (index >= 8 && index <= 11) {
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
                    Quarter final is not started yet.
                </h2>
            )}

            {/* {knockoutMatch.map((match, index) => {
                if (index >= 8 && index <= 11) {
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

export default QuarterFinal;
