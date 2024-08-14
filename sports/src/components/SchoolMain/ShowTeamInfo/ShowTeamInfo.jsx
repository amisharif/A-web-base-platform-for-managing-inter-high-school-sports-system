import React, { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import { Link, parsePath, useLoaderData, useParams } from "react-router-dom";

const ShowTeamInfo = () => {
    const teamData = useLoaderData();
    const [player, setPlayer] = useState(teamData);

    const fullUrl = window.location.href; // Get the entire URL
    const path = window.location.pathname;
  //  console.log(path);
    const basePath = path.substring(0, path.lastIndexOf("/"));
   // console.log(basePath)

    return (
        <div className=" bg-slate-100 min-h-screen">
            <div className="container flex flex-col items-center justify-center ">
                <div className="mt-5">
                    {
                        basePath !== "/admin/showschool" ? ( // Added closing parenthesis here
                            <Link to="/addplayer">
                                <button className="btn">Add new player</button>
                            </Link>
                        ) : null // Implicit return if not '/admin/showschool'
                    }
                </div>

                <div className="grid md:grid-cols-2 gap-4 mx-20 my-5">
                    {player.map((data) => (
                        <StudentCard
                            key={data._id}
                            data={data}
                            player={player}
                            setPlayer={setPlayer}
                        ></StudentCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowTeamInfo;
