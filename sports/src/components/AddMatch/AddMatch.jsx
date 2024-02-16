import React, { useState } from 'react';

const AddMatch = () => {

    const [matchId,setMatchId]= useState("");

    const [teamId1, setTeamId1] = React.useState("");
    const [score1, setScore1] = React.useState(0);
    const [formation1, setFormation1] = React.useState("");

    const [teamId2, setTeamId2] = React.useState("");
    const [score2, setScore2] = React.useState(0);
    const [formation2, setFormation2] = React.useState("");


    const [pMatchId,setPMatchId] = useState("");
    const [pTeamId, setPTeamId] = React.useState("");
    const [birthId,setBirthId] = useState("");
    const [goals,setGoals] = useState(0);


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
                console.log(data);
            });
    }

    const handleMatchSubmit = (event) => {
        event.preventDefault();
       
        
        const matchData = {
            matchId, teamId1, score1, formation1, teamId2, score2, formation2
        }
       

        fetch("http://localhost:3000/addmatch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(matchData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        console.log('Match ID',matchId);
        console.log("Form submitted1:", { teamId1, score1, formation1 });
        console.log("Form submitted2:", { teamId2, score2, formation2 });
    }

    return (
        <div className='text-center'>

           
            <h1>Matches</h1>

            <form  className="space-y-4 w-1/2 mx-auto bg-slate-300 p-10 rounded">
                <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block font-bold text-left">
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
                </div>
            {/* --------------------------------------team 1 ------------------------------------- */}
                <div className="text-center text-xl font-extrabold">Team-1</div>
              
                <div className="flex items-center">
                
                    <label htmlFor="name" className="w-24 block font-bold text-left">
                        Team ID_1:
                    </label>
                    <input
                        type="text"
                        id="teamId1"
                        name="teamId1"
                        value={teamId1}
                        onChange={(event) => setTeamId1(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block font-bold text-left">
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
                    <label htmlFor="formation" className="w-24 block font-bold text-left">
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

                <div className="text-center text-xl font-extrabold">Team-2</div>
              
                <div className="flex items-center">

                    <label htmlFor="name" className="w-24 block font-bold text-left">
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
                </div>
                <div className="flex items-center">
                    <label htmlFor="score" className="w-24 block font-bold text-left">
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
                    <label htmlFor="formation" className="w-24 block font-bold text-left">
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
                    <button onClick={handleMatchSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Add Match
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Update Match
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Delete Match
                    </button>
                </div>


     
            </form>

 
        {/* ----------------------scorer----------------------------------  */}

            


            <form className="space-y-4 w-1/2 mx-auto mt-20 mb-20 bg-slate-300 p-10 rounded">

                <h2 className="text-center text-xl font-extrabold">Scorer</h2>

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
                    <button onClick={handleScorerSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Add 
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Update
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Delete 
                    </button>
                </div>



            </form>

           

          
          


          
        </div>
    );
};

export default AddMatch;