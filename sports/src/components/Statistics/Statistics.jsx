import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsCard from '../StatisticsCard/StatisticsCard';

const Statistics = () => {


   const statData = useLoaderData();            //statistics Collection
 //  console.log(statData);

  //  const {birthId,Goals,pTeamId} = statData;
    const [playerList, setPlayerList] = useState([]);
    const [schoolList, setSchoolList] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/teaminfo')
            .then(response => response.json())
            .then(data => setPlayerList(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        fetch('http://localhost:3000/showschool')
            .then(response => response.json())
            .then(da => setSchoolList(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    




    return (
        <div>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Scorers</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Rank</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Goals</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Team</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {
                            statData.map((data,index) =>
                                <StatisticsCard index={index} schoolList={schoolList} playerList={playerList} data = {data}></StatisticsCard>
                                )
                        }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Statistics;