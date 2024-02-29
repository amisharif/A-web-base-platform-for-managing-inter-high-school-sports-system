import React from 'react';

const StatisticsCard = ({ data, index, schoolList, contribution }) => {


    const schoolMatch = schoolList.filter(element => element.id === data.
        schoolId)[0];
  
    return (
        <tr key={data._id} className='hover:bg-gray-100'>

            <td className="px-4 py-2 border ">{index + 1}</td>
            <td className="px-4 py-2 border ">{data?.name}</td>
            <td className="px-4 py-2 border ">{contribution}</td>
            <td className="px-4 py-2 border ">{schoolMatch?.name}</td>
        </tr>
    );
};

export default StatisticsCard;