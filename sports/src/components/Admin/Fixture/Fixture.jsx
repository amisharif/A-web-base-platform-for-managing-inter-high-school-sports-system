import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import FixtureCard from "../FixtureCard/FixtureCard";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import useAxiosSecure from "./../../useAxiosSecure/useAxiosSecure";
import useStandDataA from "../../customHook/useStandDataA";
import useStandDataB from "../../customHook/useStandDataB";
import useStandDataC from "../../customHook/useStandDataC";
import useKnockoutMatch from "../../customHook/useKnockoutMatch";

const Fixture = () => {


    const axiosSecure = useAxiosSecure();
    const [knocoutMatch,refetch] = useKnockoutMatch();

    const {
        schoolList,
        fixtureData,
        setFixtureData,

        standDataA,
        setStandDataA,
        standDataB,
        setStandDataB,
        standDataC,
        setStandDataC,
        standDataD,
        setStandDataD,
        standDataE,
        setStandDataE,
        standDataF,
        setStandDataF,
        standDataG,
        setStandDataG,
        standDataH,
        setStandDataH,
    } = useContext(AuthContext);

    const [matches, setMatches] = useState([]);
    const [allMatches, setAllMatches] = useState([]);
    const [allMatchesClone, setAllMatchesClone] = useState([]);

    // useEffect(() => {
    //     setFixtureData(matches)
    // }, [])

    let generateMatches = (Group, grp) => {
        // const { schoolList } = useContext(AuthContext);
        let data = [];
        //console.log(index)

        Group.map((item) => {
            data.push(item.id);
        });

        let totalTeam = data.length;
        let rounds = totalTeam - 1;
        let matchPerRound = totalTeam / 2;
        let teamVar = totalTeam - 1;

        let matches = [];

        for (let round = 0; round < rounds; round++) {
            for (let match = 0; match < matchPerRound; match++) {
                let home = (round + match) % (totalTeam - 1);
                let away = (teamVar - home) % (totalTeam - 1);

                if (match === 0) {
                    away = totalTeam - 1;
                }

                let currentMatch = {
                    round: round + 1, // Adjust for human-readable numbering
                    match: match + 1, // Adjust for human-readable numbering
                    homeTeam: data[home],
                    awayTeam: data[away],
                    group: grp,
                    homeScore: -1,
                    awayScore: -1,
                };

                matches.push(currentMatch);
            }
            teamVar += 2;
        }
        return matches;
    };

    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];
    let groupE = [];
    let groupF = [];
    let groupG = [];
    let groupH = [];

    const handleFixture = () => {
        const shuffled = [...schoolList]; // Create a copy of the array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
        // console.log(shuffled)

        // const matchData = {
        //     matchId, teamId1, score1, formation1, teamId2, score2, formation2, group: fixtureData[matchId].group       //for standing table
        // }

        for (let i = 0; i < 4; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "A",
            };
            groupA.push(grp);
        }
        axiosSecure.post("/standing/a", groupA).then((res) => {
            if (res.data.length === 4) {
                groupA = [];
                // console.log(res.data)
            }
        });

        for (let i = 4; i < 8; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "B",
            };
            groupB.push(grp);
        }
        axiosSecure.post("/standing/b", groupB).then((res) => {
            if (res.data.length === 4) {
                groupB = [];
                // console.log(res.data)
            }
        });

        for (let i = 8; i < 12; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "C",
            };
            groupC.push(grp);
        }

        axiosSecure.post("/standing/c", groupC).then((res) => {
            if (res.data.length === 4) {
                groupC = [];
                // console.log(res.data)
            }
        });
        for (let i = 12; i < 16; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "D",
            };
            groupD.push(grp);
        }
        axiosSecure.post("/standing/d", groupD).then((res) => {
            if (res.data.length === 4) {
                groupD = [];
                // console.log(res.data)
            }
        });

        for (let i = 16; i < 20; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "E",
            };
            groupE.push(grp);
        }
        axiosSecure.post("/standing/e", groupE).then((res) => {
            if (res.data.length === 4) {
                groupE = [];
                // console.log(res.data)
            }
        });

        for (let i = 20; i < 24; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "F",
            };
            groupF.push(grp);
        }
        axiosSecure.post("/standing/f", groupF).then((res) => {
            if (res.data.length === 4) {
                groupF = [];
                // console.log(res.data)
            }
        });
        for (let i = 24; i < 28; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "G",
            };
            groupG.push(grp);
        }
        axiosSecure.post("/standing/g", groupG).then((res) => {
            if (res.data.length === 4) {
                groupG = [];
                // console.log(res.data)
            }
        });
        for (let i = 28; i < 32; i++) {
            //   console.log(shuffled[i]);
            const grp = {
                ...shuffled[i],
                name: "H",
            };
            groupH.push(grp);
        }
        axiosSecure.post("/standing/h", groupH).then((res) => {
            if (res.data.length === 4) {
                groupH = [];
                // console.log(res.data)
            }
        });

        //    -----------------------------added all the group matches to allMatches---------------------------------

        const allGroups = [
            groupA,
            groupB,
            groupC,
            groupD,
            groupE,
            groupF,
            groupG,
            groupH /* other groups */,
        ];
        const allMatches = allGroups.flatMap((Group, index) =>
            generateMatches(Group, Group[index % 4]?.name)
        ); // Combine and flatten
        setAllMatches(allMatches);

        let match = []; //take one team from each group ...generate match list
        let cnt = 0;

        for (let i = 0; i < 6; i++) {
            for (let j = i; j < 48; j += 6) {
                // console.log(allMatches[j]);
                const obj = {
                    matchId: cnt,
                    ...allMatches[j],
                };
                match.push(obj);
                cnt = cnt + 1;
            }
        }

        // Swal.fire({

        //     icon: "error",
        //     title: "Oops...",
        //     text: "Fixture already created!",
        // });

        // console.log(allMatchesClone)

        const url = "http://localhost:3000/groupclone"; //send suffled fixture to the database
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(match),
        };

        fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                //console.log('Response:', data);
                if (data.insertedCount === 48) {
                    setFixtureData(match); //---------set fixture data-------------
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Fixture Created Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const [standDataA_A] = useStandDataA();
    const [standDataB_B] = useStandDataB();
    const [standDataC_C] = useStandDataC();

    const handleKnockoutMatch = () => {
        const a0 = standDataA_A[0];
        const a1 = standDataA_A[1];

        const b0 = standDataB_B[0];
        const b1 = standDataB_B[1];

        const c0 = standDataC_C[0];
        const c1 = standDataC_C[1];

        const d0 = standDataD[0];
        const d1 = standDataD[1];

        const e0 = standDataE[0];
        const e1 = standDataE[1];

        const f0 = standDataF[0];
        const f1 = standDataF[1];

        const g0 = standDataG[0];
        const g1 = standDataG[1];

        const h0 = standDataH[0];
        const h1 = standDataH[1];

        let knockoutGroup = [];

        const knockoutmatch1 = {
            eiin1: a0.eiin,
            eiin2: b1.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "0",
        };

        const knockoutmatch2 = {
            eiin1: a1.eiin,
            eiin2: b0.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "1",
        };
        const knockoutmatch3 = {
            eiin1: c0.eiin,
            eiin2: d1.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "2",
        };
        const knockoutmatch4 = {
            eiin1: c1.eiin,
            eiin2: d0.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "3",
        };
        const knockoutmatch5 = {
            eiin1: e0.eiin,
            eiin2: f1.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "4",
        };
        const knockoutmatch6 = {
            eiin1: e1.eiin,
            eiin2: f0.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "5",
        };
        const knockoutmatch7 = {
            eiin1: g0.eiin,
            eiin2: h1.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "6",
        };
        const knockoutmatch8 = {
            eiin1: g1.eiin,
            eiin2: h0.eiin,
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "7",
        };
        //  -------------------------Round of 16----------------------
        knockoutGroup.push(
            knockoutmatch1,
            knockoutmatch2,
            knockoutmatch3,
            knockoutmatch4,
            knockoutmatch5,
            knockoutmatch6,
            knockoutmatch7,
            knockoutmatch8
        );

        const knockoutmatch9 = {
            eiin1: "QF1",
            eiin2: "QF2",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "8",
        };
        const knockoutmatch10 = {
            eiin1: "QF3",
            eiin2: "QF4",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "9",
        };
        const knockoutmatch11 = {
            eiin1: "QF5",
            eiin2: "QF6",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "10",
        };
        const knockoutmatch12 = {
            eiin1: "QF7",
            eiin2: "QF8",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "11",
        };

        // -----------------Quarter Final-----------------------

        knockoutGroup.push(
            knockoutmatch9,
            knockoutmatch10,
            knockoutmatch11,
            knockoutmatch12
        );

        //------------------Semi Final-----------------

        const knockoutmatch13 = {
            eiin1: "SF1",
            eiin2: "SF2",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "12",
        };
        const knockoutmatch14 = {
            eiin1: "SF3",
            eiin2: "SF4",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "13",
        };

        knockoutGroup.push(knockoutmatch13, knockoutmatch14);

        //---------------------Final-------------------

        const knockoutmatch15 = {
            eiin1: "FN1",
            eiin2: "FN2",
            goals_scored1: -1,
            goals_scored2: -1,
            matchId: "14",
        };

        knockoutGroup.push(knockoutmatch15);

        //console.log(knockoutGroup)

        axiosSecure.post(`/admin/knockoutmatch`, knockoutGroup).then((res) => {
            // console.log(res);
            if (res.data.insertedCount === 15) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Knockout Stage started",
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
            //refetch();
        });
    };

    return (
        <div className="bg-slate-200 w-full ">
            <button
                onClick={handleFixture}
                className="btn btn-xs sm:btn-sm md:btn-md mx-auto mt-7 ml-[300px]"
            >
                Create Fixture (Group Stage)
            </button>
            <h2 style={{ marginLeft: "350px" }} className="font-bold py-5">
                {" "}
                Match Schedule
            </h2>

            {/* group clone */}
            {fixtureData.map((match, index) => (
                // <li key={`${match.round}-${match.match}`} className='py-2 px-6 bg-slate-400 mt-1'>
                //     Match {index + 1}: {match.homeTeam} vs {match.awayTeam}
                // </li>
                <FixtureCard
                    key={index}
                    index={index}
                    team1={match.homeTeam}
                    team2={match.awayTeam}
                    groupName={match.group}
                    matchId={match.matchId}
                ></FixtureCard>
            ))}

            <button
                className="btn btn-xs sm:btn-sm md:btn-md mx-auto mt-7 ml-[300px] mb-20"
                onClick={handleKnockoutMatch}
            >
                Create Fixture (Knockout Stage)
            </button>
        </div>
    );
};

export default Fixture;
