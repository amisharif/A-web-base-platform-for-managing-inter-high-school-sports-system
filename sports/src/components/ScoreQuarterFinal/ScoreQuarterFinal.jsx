import React, { useContext } from 'react';
import useKnockoutMatch from '../customHook/useKnockoutMatch';
import MatchScoreCard from '../MatchScoreCard/MatchScoreCard';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import ScoreKnockoutCard from '../ScoreKnockoutCard/ScoreKnockoutCard';

const ScoreQuarterFinal = () => {

    const [knockoutMatch,refetch] = useKnockoutMatch();
    const {schoolList} = useContext(AuthContext);
    console.log(knockoutMatch);

    return (
        <div className="w-full bg-slate-200 py-12">
             {knockoutMatch[7]?.goals_scored1 != -1 ? (
               knockoutMatch.map((data, index) => {
                if (index >= 8 && index<=11) {
                    return (
                        <ScoreKnockoutCard
                            key={data._id}
                            data={data}
                        ></ScoreKnockoutCard>
                    );
                }
            })
            ) : (
                <h2 style={{ marginLeft: "350px" }} className="font-bold py-5 mt-24 text-red-500 text-3xl">
                    {" "}
                    Quarter-final is not started yet.
                </h2>
            )}
        </div>
    );
};

export default ScoreQuarterFinal;