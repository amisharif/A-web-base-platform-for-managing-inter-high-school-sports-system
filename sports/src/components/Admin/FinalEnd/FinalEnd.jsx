import React from 'react';
import useKnockoutMatch from '../../customHook/useKnockoutMatch';
import useAxiosSecure from '../../useAxiosSecure/useAxiosSecure';
import KnockoutMatchCard from '../KnockoutMatchCard/KnockoutMatchCard';

const FinalEnd = () => {

    const [knockoutMatch,refetch] = useKnockoutMatch();
    const axiosSecure = useAxiosSecure();

    let s12="";
    let s13="";

    if (
        knockoutMatch[11]?.goals_scored1 != -1 &&
        knockoutMatch[11]?.goals_scored2 !=-1
    ){
        if (
            knockoutMatch[12]?.goals_scored1 > knockoutMatch[12]?.goals_scored2
        ) {
            s12 = knockoutMatch[12]?.eiin1;
        } else {
            s12 = knockoutMatch[12]?.eiin2;
        }
        if (
            knockoutMatch[13]?.goals_scored1 > knockoutMatch[13]?.goals_scored2
        ) {
            s13 = knockoutMatch[13]?.eiin1;
        } else {
            s13 = knockoutMatch[13]?.eiin2;
        }


        const matchData = {
            s12,s13
        };

        axiosSecure.post(`/updatefinalend`, matchData).then((res) => {
            refetch();
            //console.log(res);
        });


    }
        return (
            <div bg-slate-200 w-full>
                {/* <button onClick={handleSemiFinal}>Handle Semi-final</button> */}

                {knockoutMatch[11]?.goals_scored1 != -1 ? (
                    <h2
                        style={{ marginLeft: "400px" }}
                        className="font-bold py-5"
                    >
                        {" "}
                        Semi Final
                    </h2>
                ) : (
                    ""
                )}
                {knockoutMatch[12]?.goals_scored1 != -1 ? (
                    knockoutMatch.map((match, index) => {
                        if (index >= 14 && index <= 14) {
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
                        Final is not started yet.
                    </h2>
                )}

              
            </div>
        );
};

export default FinalEnd;