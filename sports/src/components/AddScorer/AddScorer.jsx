import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; 

const AddScorer = ({ sendToAddScorer }) => {

    const {playerInfo} = useContext(AuthContext)


    const {
        matchId, teamId1, score1, formation1, teamId2, score2, formation2, teamName1, teamName2
    } = sendToAddScorer;




    const [pTeamId, setPTeamId] = useState("");
    const [contribution, setContribution] = useState("");
    const [time, setTime] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const [selectedPlayerId, setSelectedPlayerId] = useState("");

    //  if (pMatchId ==="100742")console.log("borishal")

    //console.log(pTeamId)


    let selectedPlayerList  = []

    const handleEiin = (eiin)=>{
     //   console.log(eiin)
     //   console.log(teamInfo)
        setPTeamId(eiin)
        selectedPlayerList = []

        const filteredItems = playerInfo.filter((item) => item.schoolId.includes(eiin));
      //  console.log(filteredItems)

        filteredItems.map(item=>{
            selectedPlayerList.push(item.birthId)
        })   
        setSelectedPlayer(selectedPlayerList)
    }


    const handlePlayerId = (playernid)=>{
      //  console.log(playernid)
        setSelectedPlayerId(playernid)
    }

    const handleScorerSubmit = (e) => {

        e.preventDefault();

        const filteredItems = playerInfo.filter((item) => item.birthId.includes(selectedPlayerId));
      //  console.log(filteredItems[0].name)

        const scorerData = {
                matchId, pTeamId, selectedPlayerId, contribution,time,selectedPlayerId,name:filteredItems[0].name
        }

      //  console.log(scorerData)
        fetch("http://localhost:3000/playersinmatch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scorerData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged)
                if (data.acknowledged){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }


    return (
        <form className="space-y-4 w-3/4  mx-auto mt-10 mb-20 bg-slate-300 p-10 rounded">

            <h2 className="text-center font-bold text-xl font-serif">Scorer</h2>


            <div className="flex items-center">
                <label className="w-32 block text-left">
                    School:
                </label>
                <label className="input-group w-full">
                    <select
                        id="teamName"
                        name="teamName"
                        value={pTeamId}
                       // onChange={(event) => setPTeamId(event.target.value)}
                        onChange ={(event) => handleEiin(event.target.value)}
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

                <label htmlFor="name" className="w-32 block  text-left">
                    Player:
                </label>
                <label className="input-group w-full">
                    <select
                        id="selectplayer"
                        name="selectplayer"
                        value={selectedPlayerId}
                        onChange={(event) => handlePlayerId(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >
                        <option>Select Birth ID</option>
                        {selectedPlayer.map((option) => (
                            
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                      
                        
                        {/* <option value="Yellow Card">Yellow Card</option>
                        <option value="Red Card">Red Card</option>
                        <option value="Assist">Assist</option> */}


                        {/* ... more options */}
                    </select>
                </label>
            </div>
            <div className="flex items-center">

                <label htmlFor="name" className="w-32 block  text-left ">
                    Contribution:
                </label>
                <label className="input-group w-full">
                    <select
                        id="contribution"
                        name="contribution"
                        value={contribution}
                        onChange={(event) => setContribution(event.target.value)}
                        className="w-full px-3 py-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-md"
                        required
                    >

                        {/* Add your actual formation options here */}
                       
                        <option value="">Select Contribution</option>
                        <option value="Goal">Goal</option>
                        <option value="Yellow Card">Yellow Card</option>
                        <option value="Red Card">Red Card</option>
                        <option value="Assist">Assist</option>


                        {/* ... more options */}
                    </select>
                </label>
            </div>
           
            <div className="flex items-center">
                <label htmlFor="score" className="w-32 block text-left">
                    Time:
                </label>
                <input
                    type="text"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(event) => setTime((event.target.value))}
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