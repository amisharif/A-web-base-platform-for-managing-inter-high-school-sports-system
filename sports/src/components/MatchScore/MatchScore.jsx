import { useLoaderData } from "react-router-dom";
import MatchScoreCard from './../MatchScoreCard/MatchScoreCard';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";


const MatchScore = () => {

    const matchData = useLoaderData();
  //  console.log(matchData);
  const {fixtureData,schoolList}  = useContext(AuthContext)
 // console.log(fixtureData)




    return (
        <div>
            <h2 className="text-center">Total Match {fixtureData.length}</h2>

            {
               fixtureData.map(data=> <MatchScoreCard
                   key={data._id} data={data} schoolList={schoolList}
               ></MatchScoreCard>)
              
            }
            
            
        </div>
    );
};

export default MatchScore;