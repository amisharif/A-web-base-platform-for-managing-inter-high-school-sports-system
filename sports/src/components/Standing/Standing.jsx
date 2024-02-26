import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StandingCard from './StandingCard';
import { useEffect, useRef } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const Standing = () => {

    const standingData = useLoaderData();       //standCollection
   // console.log(standingData)


  //  const [schoolList, setSchoolList] = useState([]);

    const { schoolList, standDataA, standDataB, standDataC,standDataD,standDataE }  = useContext(AuthContext)

    
    // useEffect(() => {
    //     fetch('http://localhost:3000/showschool')
    //         .then(response => response.json())
    //         .then(da => setSchoolList(da))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

   

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-4">Standing</h1>
            <div className="container mx-auto py-8">


                {/* ---------------------Standing A-------------- */}


                <h1 className="text-xl text-center mb-4">Standing A</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Team</th>
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
                        {standDataA && Array.isArray(standDataA) && (
                            standDataA.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                        </tbody>
                </table>


                {/* ---------------------Standing B-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing B</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Team</th>
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
                        {standDataB && Array.isArray(standDataB) && (
                            standDataB.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>


                {/* ---------------------Standing C-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing C</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Team</th>
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
                        {standDataC && Array.isArray(standDataC) && (
                            standDataC.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>
                {/* ---------------------Standing D-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing D</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Team</th>
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
                        {standDataD && Array.isArray(standDataD) && (
                            standDataD.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>
                {/* ---------------------Standing E-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing E</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Pos</th>
                            <th className="px-4 py-2 bg-gray-100 font-bold">Team</th>
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
                        {standDataE && Array.isArray(standDataE) && (
                            standDataE.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>




            </div>
        </div>
    );
};

export default Standing;