import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlayersCard from '../PlayersCard/PlayersCard';

const Players = () => {

    const players = useLoaderData()
    return (
        <div>
            <div className="container mx-auto py-8 w-3/4">
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>

                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Serial</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Player</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Position</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">School</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            players.map((data, index) =>
                               <PlayersCard data = {data} index = {index}></PlayersCard>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Players;