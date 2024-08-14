import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import AddScorer from "../AddScorer/AddScorer";
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import useGroupClone from "../customHook/useGroupClone";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const AddMatch = () => {
    const { schoolList } = useContext(AuthContext);
    const [groupClone, refetch] = useGroupClone();
    const axiosSecure = useAxiosSecure();

    const parm = useParams();
    const matchId = parm.matchid;

    const filteredItemByGroupId = groupClone.filter(
        (item) => item.matchId.toString() === matchId
    );

    const teamId1 = filteredItemByGroupId[0]?.homeTeam;
    const teamId2 = filteredItemByGroupId[0]?.awayTeam;

    const filteredItems1 = schoolList.filter((item) =>
        item.id.includes(teamId1)
    );
    const filteredItems2 = schoolList.filter((item) =>
        item.id.includes(teamId2)
    );
    
    const teamName1 = filteredItems1[0]?.name;
    const teamName2 = filteredItems2[0]?.name;
    
    const homeScore = filteredItemByGroupId[0]?.homeScore;
    const awayScore = filteredItemByGroupId[0]?.awayScore;

   

    const [score1, setScore1] = React.useState(0);
    const [formation1, setFormation1] = React.useState("");

    // const [teamId2, setTeamId2] = React.useState("");
    const [score2, setScore2] = React.useState(0);
    const [formation2, setFormation2] = React.useState("");

    const [prevS1, setPrevS1] = useState(0);
    const [prevS2, setPrevS2] = useState(0);

    useEffect(() => {
        if (homeScore !== -1) {
            setScore1(homeScore);
            setPrevS1(homeScore);
        }
        if (awayScore !== -1) {
            setScore2(awayScore);
            setPrevS2(awayScore);
        }
    }, []);

    const [pMatchId, setPMatchId] = useState("");
    const [pTeamId, setPTeamId] = React.useState("");
    const [birthId, setBirthId] = useState("");
    const [goals, setGoals] = useState(0);

    // const handleScorerSubmit = (e) => {
    //     e.preventDefault();

    //     const scorerData = {
    //         pMatchId,
    //         pTeamId,
    //         birthId,
    //         goals,
    //     };
    //     fetch("http://localhost:3000/addScorer", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(scorerData),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             //console.log(data);
    //         });
    // };



    const sendToAddScorer = {
        matchId,
        teamId1,
        score1,
        formation1,
        teamId2,
        score2,
        formation2,
        teamName1,
        teamName2,
    };

    const matchData = {
        matchId,
        teamId1,
        score1,
        formation1,
        teamId2,
        score2,
        formation2,
     //   group: groupClone[matchId]?.group, //for standing table
        group:filteredItemByGroupId[0]?.group,
        prevS1,
        prevS2,
    };

   

    const handleMatchSubmit = (event) => {
        event.preventDefault();


        axiosSecure
            .post(`/updatematchscore/${matchData.group}`, matchData)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            });
    };

    return (
        <div className="text-center mx-auto bg-slate-200 w-full">
            {/* <h1>Matches</h1> */}

            <form className="space-y-4  mx-auto bg-slate-300 w-3/4 p-10 rounded mt-4">
                <h2>Group: {filteredItemByGroupId[0]?.group}</h2>
                {/* --------------------------------------team 1 ------------------------------------- */}
                <div className="text-center font-bold font-serif">
                    {filteredItems1[0]?.name}
                </div>

                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score1"
                        name="score1"
                        // value={score1}
                        placeholder={homeScore}
                        onChange={(event) =>
                            setScore1(parseInt(event.target.value))
                        }
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="formation" className="w-24 block text-left">
                        Formation:
                    </label>
                    <select
                        id="formation1"
                        name="formation1"
                        value={formation1}
                        onChange={(event) => setFormation1(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                        <option value="">Select Formation</option>
                        {/* Add your actual formation options here */}
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        {/* ... more options */}
                    </select>
                </div>

                {/* ------------------------------------Team 2-------------------------------------- */}

                <div className="text-center font-bold font-serif">
                    {filteredItems2[0]?.name}
                </div>

                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score2"
                        name="score2"
                        //value={score2}
                        placeholder={awayScore}
                        onChange={(event) =>
                            setScore2(parseInt(event.target.value))
                        }
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="formation" className="w-24 block text-left">
                        Formation:
                    </label>
                    <select
                        id="formation2"
                        name="formation2"
                        value={formation2}
                        onChange={(event) => setFormation2(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                        <option value="">Select Formation</option>
                        {/* Add your actual formation options here */}
                        <option value="4-4-2">4-4-2</option>
                        <option value="4-3-3">4-3-3</option>
                        {/* ... more options */}
                    </select>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={handleMatchSubmit}
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md"
                    >
                        Update Match Score
                    </button>
                </div>
            </form>

            {/* ----------------------scorer----------------------------------  */}

            {/* <form className="space-y-4 w-1/2  mx-auto mt-10 mb-20 bg-slate-300 p-10 rounded">

                <h2 className="text-center font-bold text-xl font-serif">Scorer</h2>

                <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block font-bold text-left">
                        Match ID:
                    </label>
                    <input
                        type="text"
                        id="sMatchId"
                        name="sMatchId"
                        value={pMatchId}
                        onChange={(event) => setPMatchId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block font-bold text-left">
                        Team ID:
                    </label>
                    <input
                        type="text"
                        id="pTeamId"
                        name="pTeamId"
                        value={pTeamId}
                        onChange={(event) => setPTeamId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block font-bold text-left">
                        Birth ID:
                    </label>
                    <input
                        type="text"
                        id="birthId"
                        name="birthId"
                        value={birthId}
                        onChange={(event) => setBirthId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block font-bold text-left">
                        Goals:
                    </label>
                    <input
                        type="number"
                        id="goals"
                        name="goals"
                        value={goals}
                        onChange={(event) => setGoals(parseInt(event.target.value))}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
               
              
                <div className="flex items-center justify-center space-x-4 ">
                    <button onClick={handleScorerSubmit} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md text-sm">
                        Add 
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md text-sm">
                        Update
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-md text-sm">
                        Delete 
                    </button>
                </div>
            </form> */}

            <AddScorer sendToAddScorer={sendToAddScorer}></AddScorer>
        </div>
    );
};

export default AddMatch;
