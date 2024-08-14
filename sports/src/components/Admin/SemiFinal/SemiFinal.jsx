import React, { useEffect, useState } from "react";
import useKnockoutMatch from "../../customHook/useKnockoutMatch";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";
import KnockoutMatchCard from "../KnockoutMatchCard/KnockoutMatchCard";

const SemiFinal = () => {
    const [knockoutMatch, refetch] = useKnockoutMatch();
    const axiosSecure = useAxiosSecure();

    let sf0 = "";
    let sf1 = "";
    let sf2 = "";
    let sf3 = "";
    let sf4 = "";
    let sf5 = "";
    let sf6 = "";
    let sf7 = "";

    if (
        knockoutMatch[7]?.goals_scored1 != -1 &&
        knockoutMatch[7]?.goals_scored2 != -1
    ) {
        if (knockoutMatch[0]?.goals_scored1 > knockoutMatch[0]?.goals_scored2) {
            sf0 = knockoutMatch[0]?.eiin1;
        } else {
            sf0 = knockoutMatch[0]?.eiin2;
        }

        if (knockoutMatch[1]?.goals_scored1 > knockoutMatch[1]?.goals_scored2) {
            sf1 = knockoutMatch[1]?.eiin1;
        } else {
            sf1 = knockoutMatch[1]?.eiin2;
        }

        if (knockoutMatch[2]?.goals_scored1 > knockoutMatch[2]?.goals_scored2) {
            sf2 = knockoutMatch[2]?.eiin1;
        } else {
            sf2 = knockoutMatch[2]?.eiin2;
        }

        if (knockoutMatch[3]?.goals_scored1 > knockoutMatch[3]?.goals_scored2) {
            sf3 = knockoutMatch[3]?.eiin1;
        } else {
            sf3 = knockoutMatch[3]?.eiin2;
        }

        if (knockoutMatch[4]?.goals_scored1 > knockoutMatch[4]?.goals_scored2) {
            sf4 = knockoutMatch[4]?.eiin1;
        } else {
            sf4 = knockoutMatch[4]?.eiin2;
        }

        if (knockoutMatch[5]?.goals_scored1 > knockoutMatch[5]?.goals_scored2) {
            sf5 = knockoutMatch[5]?.eiin1;
        } else {
            sf5 = knockoutMatch[5]?.eiin2;
        }

        if (knockoutMatch[6]?.goals_scored1 > knockoutMatch[6]?.goals_scored2) {
            sf6 = knockoutMatch[6]?.eiin1;
        } else {
            sf6 = knockoutMatch[6]?.eiin2;
        }

        if (knockoutMatch[7]?.goals_scored1 > knockoutMatch[7]?.goals_scored2) {
            sf7 = knockoutMatch[7]?.eiin1;
        } else {
            sf7 = knockoutMatch[7]?.eiin2;
        }

        // console.log(sf0, sf1, sf2, sf3, sf4, sf5, sf6, sf7);
         const matchData = {
             s0: sf0,
             s1: sf1,
             s2: sf2,
             s3: sf3,
             s4: sf4,
             s5: sf5,
             s6: sf6,
             s7: sf7,
         };
         axiosSecure.post(`/updatesfinal`, matchData).then((res) => {
            refetch();
             //console.log(res);
         });
    }else console.log("Quarter final running");





    return (
        <div bg-slate-200 w-full>
            {/* <button onClick={handleSemiFinal}>Handle Semi-final</button> */}
           
            {
                knockoutMatch[11]?.goals_scored1!=-1? <h2 style={{ marginLeft: "400px" }} className="font-bold py-5">
                Semi-final
            </h2>:""
            }
            {knockoutMatch[11]?.goals_scored1 != -1 ? (
                
                knockoutMatch.map((match, index) => {
                    if (index >= 12 && index<=13) {
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
                <h2 style={{ marginLeft: "350px" }} className="font-bold py-5 mt-32 text-red-500 text-3xl">
                    {" "}
                    Semi-final is not started yet.
                </h2>
            )}

    
        </div>
    );
};

export default SemiFinal;
