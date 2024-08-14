import React, { useState, useEffect, useRef } from 'react';

const StandingCard = ({ data,schoolList,index }) => {



    const { eiin } = data;
  

    const matchingElement = schoolList.filter(element => element.id === eiin)[0];
    //console.log(matchingElement);



    return (
        <tr key={data._id}>
            <td className="px-4 py-4 border border-sky-950">{index + 1}</td>
            <td className="px-4 py-2 border border-sky-950">
                {matchingElement?.name}
            </td>
            <td className="px-4 py-2 border border-sky-950">{data.matches_played}</td>
            <td className="px-4 py-2 border border-sky-950">{data.wins}</td>
            <td className="px-4 py-2 border border-sky-950">{data.draws}</td>
            <td className="px-4 py-2 border border-sky-950">{data.losses}</td>
            <td className="px-4 py-2 border border-sky-950">{data.goals_scored}</td>
            <td className="px-4 py-2 border border-sky-950">{data.goals_conceded}</td>
            <td className="px-4 py-2 border border-sky-950">{data.goal_difference}</td>
            <td className="px-4 py-2 border border-sky-950">{data.points}</td>
        </tr>
    );
};

export default StandingCard;