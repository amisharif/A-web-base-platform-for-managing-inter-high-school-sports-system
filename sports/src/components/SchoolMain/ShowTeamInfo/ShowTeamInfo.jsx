import React, { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import { Link, useLoaderData } from 'react-router-dom';

const ShowTeamInfo = () => {

    const teamData  = useLoaderData();
    const [player,setPlayer] = useState(teamData);
   // console.log(teamData);

    return (
        <div className=' bg-slate-100'>
            <div className="container flex flex-col items-center justify-center "> 
                <div className="mt-5">
                    <Link to='/addplayer'> <button className="btn">Add new player</button></Link>
                   
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mx-20 my-5">
                    {
                        player.map(data => <StudentCard key={data._id} data={data} player = {player} setPlayer={setPlayer}></StudentCard>)
                    }
                </div>
            </div>
           
            
        </div>
    );
};

export default ShowTeamInfo;