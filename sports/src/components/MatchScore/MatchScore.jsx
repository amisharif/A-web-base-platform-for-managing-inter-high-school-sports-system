import { useLoaderData } from "react-router-dom";
import MatchScoreCard from "./../MatchScoreCard/MatchScoreCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import useGroupClone from "../customHook/useGroupClone";

const MatchScore = () => {
    
    const [groupClone, refetch] = useGroupClone();
    const { schoolList } = useContext(AuthContext);


    return (
        <div className="bg-slate-200 py-12 w-full">
            {/* <h2 className="text-center py-4">Total Match {groupClone.length}</h2> */}

            {groupClone.map((data) => (
                <MatchScoreCard
                    key={data._id}
                    data={data}
                    schoolList={schoolList}
                ></MatchScoreCard>
            ))}
        </div>
    );
};

export default MatchScore;
