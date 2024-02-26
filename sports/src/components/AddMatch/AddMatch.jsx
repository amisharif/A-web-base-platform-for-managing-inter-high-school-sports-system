import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import AddScorer from '../AddScorer/AddScorer';

const AddMatch = () => {

    const { schoolList, fixtureData } = useContext(AuthContext);

    const parm = useParams();
    const matchId = parm.matchid
    const teamId1 = fixtureData[matchId]?.homeTeam
    const teamId2 = fixtureData[matchId]?.awayTeam

   // console.log(teamId1, teamId2, fixtureData)


    const [score1, setScore1] = React.useState(0);
    const [formation1, setFormation1] = React.useState("");

   // const [teamId2, setTeamId2] = React.useState("");
    const [score2, setScore2] = React.useState(0);
    const [formation2, setFormation2] = React.useState("");


    const [pMatchId,setPMatchId] = useState("");
    const [pTeamId, setPTeamId] = React.useState("");
    const [birthId,setBirthId] = useState("");
    const [goals,setGoals] = useState(0);


    const filteredItems1 = schoolList.filter((item) => item.id.includes(teamId1));
    const filteredItems2 = schoolList.filter((item) => item.id.includes(teamId2));
    //console.log(filteredItems1[0]?.name)

    const handleScorerSubmit = (e)=>{

        e.preventDefault();
        
        const scorerData = {
            pMatchId, pTeamId, birthId, goals
        }
        fetch("http://localhost:3000/addScorer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scorerData)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
            });
    }

   // console.log(fixtureData[matchId].group)       group

    const matchData = {
        matchId, teamId1, score1, formation1, teamId2, score2, formation2, group: fixtureData[matchId].group       //for standing table
    }

    const teamName1 = filteredItems1[0]?.name;
    const teamName2 = filteredItems2[0]?.name;



    const sendToAddScorer = {
        matchId, teamId1, score1, formation1, teamId2, score2, formation2,teamName1,teamName2
    }

    const handleMatchSubmit = (event) => {
        event.preventDefault();
       
        console.log(matchData)
       
        // fetch("http://localhost:3000/addmatch", {       //add matchDB
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(matchData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //        // console.log(data);
        //     });

    }




    return (
        <div className='text-center mx-auto bg-slate-200 w-full'>

            {/* <h1>Matches</h1> */}

            <form  className="space-y-4  mx-auto bg-slate-300 w-3/4 p-10 rounded mt-4">
                {/* <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block  text-left">
                        Match ID:
                    </label>
                    <input
                        type="text"
                        id="matchId"
                        name="matchId"
                        value={matchId}
                        onChange={(event) => setMatchId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div> */}
                <h2>Group: {fixtureData[matchId].group}</h2>
            {/* --------------------------------------team 1 ------------------------------------- */}
                <div className="text-center font-bold font-serif">{filteredItems1[0]?.name}</div>
              
                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score1"
                        name="score1"
                        value={score1}
                        onChange={(event) => setScore1(parseInt(event.target.value))}
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

                <div className="text-center font-bold font-serif">{filteredItems2[0]?.name}</div>
              
                {/* <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block  text-left">
                        Team ID_2:
                    </label>
                    <input
                        type="text"
                        id="teamId2"
                        name="teamId2"
                        value={teamId2}
                        onChange={(event) => setTeamId2(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div> */}
                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block text-left">
                        Score:
                    </label>
                    <input
                        type="number"
                        id="score2"
                        name="score2"
                        value={score2}
                        onChange={(event) => setScore2(parseInt(event.target.value))}
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
                    <button onClick={handleMatchSubmit} className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md">
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