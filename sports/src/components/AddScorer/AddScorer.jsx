import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';

const AddScorer = ({ sendToAddScorer }) => {

    const {
        matchId, teamId1, score1, formation1, teamId2, score2, formation2, teamName1, teamName2
    } = sendToAddScorer;

 

    const [pMatchId, setPMatchId] = useState(matchId);
    const [birthId, setBirthId] = useState("");
    const [goals, setGoals] = useState(0);
    const [pTeamId, setPTeamId] = useState("");

    if (pMatchId ==="100742")console.log("borishal")



    const handleScorerSubmit = (e) => {

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
        console.log(scorerData)
    }


    return (
        <form className="space-y-4 w-3/4  mx-auto mt-10 mb-20 bg-slate-300 p-10 rounded">

            <h2 className="text-center font-bold text-xl font-serif">Scorer</h2>

           
            <div className="flex items-center">
                <label className="w-24 block text-left">
                    <span className='label-text'>Select School</span>
                </label>
                <label className="input-group w-full">
                    <select
                        id="teamName"
                        name="teamName"
                        value={pTeamId}
                        onChange={(event) => setPTeamId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                     
                        {/* Add your actual formation options here */}
                        <option value="">Select School</option>
                        <option value={teamId1}>{teamName1}</option>
                        <option value={teamId2}>{teamName2}</option>
                       
                        {/* ... more options */}
                    </select>
                </label>

            </div>
            <div className="flex items-center">

                <label htmlFor="name" className="w-24 block  text-left">
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
                <label htmlFor="score" className="w-24 block text-left">
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
        </form>
    );
};

export default AddScorer;