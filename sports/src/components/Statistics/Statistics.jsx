import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const Statistics = () => {


    const { playerInfo, schoolList } = useContext(AuthContext)




    return (
        <div className='w-3/4 mx-auto'>

            {/* ----------------------------Top scorrer----------------------------- */}
            <div className="container mx-auto py-8">
                <h1 className="text-xl text-center mb-4">Top Scorers</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Rank</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Goals</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">School</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            playerInfo.map((data, index) =>
                                <StatisticsCard index={index} schoolList={schoolList} data={data} contribution={data.goal}></StatisticsCard>
                            )
                        }

                    </tbody>
                </table>
            </div>

            {/* ----------------------------------Top Assist-------------------------------- */}
            <div className="container mx-auto py-8">
                <h1 className="text-xl text-center mb-4">Top Assist</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Rank</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Assist</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">School</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            playerInfo.map((data, index) =>
                                <StatisticsCard index={index} schoolList={schoolList} data={data} contribution={data.assist}></StatisticsCard>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {/* ----------------------------------Top Yellow card-------------------------------- */}
            <div className="container mx-auto py-8">
                <h1 className="text-xl text-center mb-4">Top Yellow Card</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Rank</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Yellow Card</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">School</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            playerInfo.map((data, index) =>
                                <StatisticsCard index={index} schoolList={schoolList} data={data} contribution={data.yellowCard}></StatisticsCard>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {/* ----------------------------------Top Red card-------------------------------- */}
            <div className="container mx-auto py-8">
                <h1 className="text-xl text-center mb-4">Top Red Card</h1>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Rank</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Red Card</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">School</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            playerInfo.map((data, index) =>
                                <StatisticsCard index={index} schoolList={schoolList} data={data} contribution={data.redCard}></StatisticsCard>
                            )
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Statistics;