import React from 'react';

const StatisticsCard = ({ data, index, schoolList, contribution }) => {


    const schoolMatch = schoolList.filter(element => element.id === data.
        schoolId)[0];
  
    return (
        <tr key={data._id} className="hover:bg-cyan-800">
            <td className="px-4 py-2 border border-sky-950">{index + 1}</td>
            <td className="px-4 py-2 border border-sky-950">{data?.name}</td>
            <td className="px-4 py-2 border border-sky-950">{contribution}</td>
            <td className="px-4 py-2 border border-sky-950">
                {schoolMatch?.name}
            </td>
        </tr>
    );
};

export default StatisticsCard;