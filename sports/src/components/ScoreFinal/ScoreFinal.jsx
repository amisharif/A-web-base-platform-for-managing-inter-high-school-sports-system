import React from 'react';
import useKnockoutMatch from '../customHook/useKnockoutMatch';
import ScoreKnockoutCard from '../ScoreKnockoutCard/ScoreKnockoutCard';

const ScoreFinal = () => {

    const [knockoutMatch,refetch] = useKnockoutMatch();
    return (
        <div className="w-full bg-slate-200 py-12">
            {knockoutMatch[13]?.goals_scored1 != -1 ? (
                knockoutMatch.map((data, index) => {
                    if (index >= 14) {
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
                    Final is not started yet.
                </h2>
            )}
        </div>
    );
};

export default ScoreFinal;