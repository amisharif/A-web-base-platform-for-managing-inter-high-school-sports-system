import React from 'react';
import ScoreKnockoutCard from '../ScoreKnockoutCard/ScoreKnockoutCard';
import useKnockoutMatch from '../customHook/useKnockoutMatch';
import useGroupClone from './../customHook/useGroupClone';

const ScoreRoundof16 = () => {

    const [knockoutMatch,refetch] = useKnockoutMatch();
    const [groupClone] = useGroupClone()
    const homeScoregroupStage47 = groupClone[47]?.homeScore; 
    const awayScoreGroupStage47 = groupClone[47]?.awayScore;
    console.log(homeScoregroupStage47,awayScoreGroupStage47) 
        return (
            <div className="w-full bg-slate-200 py-12">
                {homeScoregroupStage47 !== -1 &&
                awayScoreGroupStage47 !== -1 ? (
                    knockoutMatch.map((data, index) => {
                        if (index <= 7) {
                            return (
                                <ScoreKnockoutCard
                                    key={data._id}
                                    data={data}
                                ></ScoreKnockoutCard>
                            );
                        }
                    })
                ) : (
                    <h2
                        style={{ marginLeft: "350px" }}
                        className="font-bold py-5 mt-24 text-red-500 text-3xl"
                    >
                        {" "}
                        Round of 16 is not started yet...
                    </h2>
                )}

                {/* {knockoutMatch.map((data, index) => {
                    if (index <= 7) {
                        return (
                            <ScoreKnockoutCard
                                key={data._id}
                                data={data}
                            ></ScoreKnockoutCard>
                        );
                    }
                })} */}
            </div>
        );
};

export default ScoreRoundof16;