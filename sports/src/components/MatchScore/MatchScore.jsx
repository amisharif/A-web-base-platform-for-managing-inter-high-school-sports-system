import { useLoaderData } from "react-router-dom";
import MatchScoreCard from './../MatchScoreCard/MatchScoreCard';


const MatchScore = () => {

    const matchData = useLoaderData();
    return (
        <div>
            <h2 className="text-center">Total Match {matchData.length}</h2>

            {
               matchData.map(data=> <MatchScoreCard
               key={data._id} data={data}
               ></MatchScoreCard>)
              
            }
            
            
        </div>
    );
};

export default MatchScore;