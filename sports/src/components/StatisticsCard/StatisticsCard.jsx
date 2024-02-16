import React from 'react';

const StatisticsCard = ({ data, index, playerList, schoolList }) => {


    const matchingElement = playerList.filter(element => element.birthId === data.birthId)[0];
    console.log(matchingElement?.name);


    const schoolMatch = schoolList.filter(element => element.id === data.pTeamId)[0];
    console.log(schoolMatch?.name);



    return (
        <tr key={data._id} className='hover:bg-gray-100'>

            <td className="px-4 py-2 border ">{index + 1}</td>
            <td className="px-4 py-2 border ">{matchingElement?.name}</td>
            <td className="px-4 py-2 border ">{data.Goals}</td>
            <td className="px-4 py-2 border ">{schoolMatch?.name}</td>
        </tr>
    );
};

export default StatisticsCard;