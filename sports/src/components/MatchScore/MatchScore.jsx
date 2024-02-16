import { useLoaderData } from "react-router-dom";
import MatchScoreCard from './../MatchScoreCard/MatchScoreCard';
import { useEffect, useState } from "react";


const MatchScore = () => {

    const matchData = useLoaderData();
  //  console.log(matchData);

    const [schoolList, setSchoolList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/showschool')
            .then(response => response.json())
            .then(da => setSchoolList(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);





    return (
        <div>
            <h2 className="text-center">Total Match {matchData.length}</h2>

            {
               matchData.map(data=> <MatchScoreCard
                   key={data._id} data={data} schoolList={schoolList}
               ></MatchScoreCard>)
              
            }
            
            
        </div>
    );
};

export default MatchScore;