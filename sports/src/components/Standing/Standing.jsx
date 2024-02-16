import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StandingCard from './StandingCard';
import { useEffect, useRef } from 'react';

const Standing = () => {

    const standingData = useLoaderData();       //standCollection
   // console.log(standingData)


    const [schoolList, setSchoolList] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:3000/showschool')
            .then(response => response.json())
            .then(da => setSchoolList(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

   

    return (
        <div>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Standings</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Club</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">MP</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">W</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">D</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">L</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">GF</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">GA</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">GD</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pts</th>
                        </tr>
                    </thead>

                    <tbody>


                        {
                            standingData.map((data, index) =>
                               
                                <StandingCard key={data._id} schoolList={schoolList} index={index}  data={data}></StandingCard>
                            )
                        }
                       
                        

                        </tbody>

                    </table>

                    </div>
        </div>
    );
};

export default Standing;