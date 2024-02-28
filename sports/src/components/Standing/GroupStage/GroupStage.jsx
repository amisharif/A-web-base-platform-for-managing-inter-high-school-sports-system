import React, { useContext, useState } from 'react';
import { useEffect, useRef } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import StandingCard from '../StandingCard';


const GroupStage = () => {


    const { schoolList, standDataA, standDataB, standDataC, standDataD, standDataE, standDataF, standDataG, standDataH } = useContext(AuthContext)

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
                {/* ---------------------Standing F-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing F</h1>
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
                        {standDataF && Array.isArray(standDataF) && (
                            standDataF.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>
                {/* ---------------------Standing G-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing G</h1>
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
                        {standDataG && Array.isArray(standDataG) && (
                            standDataG.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>
                {/* ---------------------Standing H-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing H</h1>
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
                        {standDataH && Array.isArray(standDataH) && (
                            standDataH.map((data, index) => (
                                <StandingCard key={data._id} schoolList={schoolList} index={index} data={data} />
                            ))
                        )}
                    </tbody>
                </table>




            </div>
        </div>


    );
};

export default GroupStage;