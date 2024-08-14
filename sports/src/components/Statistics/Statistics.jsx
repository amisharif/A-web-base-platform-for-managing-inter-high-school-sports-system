import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const Statistics = () => {


    const { playerInfo, schoolList ,topScorer,topAssist,topYellowCard,topRedCard} = useContext(AuthContext)



    return (
        <div className="bg-slate-200 pt-12">
            <div className="w-3/5 mx-auto">
                <h1 className="text-center  font-black text-3xl ">
                    Tournament Statistics
                </h1>
                {/* ----------------------------Top scorrer----------------------------- */}
                <div className="container mx-auto py-8">
                    <h1 className="text-xl text-center mb-4 font-serif font-extrabold text-cyan-900">
                        Top Scorers
                    </h1>
                    <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                        <thead className="text-white text-sm">
                            <tr>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Rank
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Player
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Goals
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    School
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topScorer.map((data, index) => (
                                <StatisticsCard
                                    index={index}
                                    schoolList={schoolList}
                                    data={data}
                                    contribution={data.goal}
                                ></StatisticsCard>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ----------------------------------Top Assist-------------------------------- */}
                <div className="container mx-auto py-8">
                    <h1 className="text-xl text-center mb-4 font-serif font-extrabold text-teal-950">
                        Top Assist
                    </h1>

                    <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                        <thead className="text-white text-sm">
                            <tr>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Rank
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Player
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Assist
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    School
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topAssist.map((data, index) => (
                                <StatisticsCard
                                    index={index}
                                    schoolList={schoolList}
                                    data={data}
                                    contribution={data.assist}
                                ></StatisticsCard>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* ----------------------------------Top Yellow card-------------------------------- */}
                <div className="container mx-auto mt-4">
                    <h1 className="text-xl text-center mb-4 font-serif font-extrabold text-teal-950">
                        Top Yellow Card
                    </h1>
                    <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                        <thead className="text-white text-sm">
                            <tr>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Rank
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Player
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    Yellow Card
                                </th>
                                <th className="px-4 py-2 bg-cyan-950 font-bold">
                                    School
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topYellowCard.map((data, index) => (
                                <StatisticsCard
                                    index={index}
                                    schoolList={schoolList}
                                    data={data}
                                    contribution={data.yellowCard}
                                ></StatisticsCard>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* ----------------------------------Top Red card-------------------------------- */}
                <div className="container mx-auto py-8 mt-4">
                    <h1 className="text-xl text-center mb-4 font-serif font-extrabold text-teal-950">
                        Top Red Card
                    </h1>
                    <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                        <thead className="text-white text-sm">
                            <tr>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Rank
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Player
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    Red Card
                                </th>
                                <th className="px-4 py-2 bg-teal-950 font-bold">
                                    School
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topRedCard.map((data, index) => (
                                <StatisticsCard
                                    index={index}
                                    schoolList={schoolList}
                                    data={data}
                                    contribution={data.redCard}
                                ></StatisticsCard>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Statistics;