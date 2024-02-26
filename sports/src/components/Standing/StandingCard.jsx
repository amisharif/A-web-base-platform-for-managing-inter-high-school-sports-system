import React, { useState, useEffect, useRef } from 'react';

const StandingCard = ({ data,schoolList,index }) => {



    const { team_name } = data;
  

    const matchingElement = schoolList.filter(element => element.id === team_name)[0];
    //console.log(matchingElement);



    return (
        <tr key={data._id}>
            <td className="px-4 py-2 border">{index+1}</td>
            <td className="px-4 py-2 border flex items-center gap-2">{matchingElement?.name}</td>
            <td className="px-4 py-2 border">{data.matches_played}</td>
            <td className="px-4 py-2 border">{data.wins}</td>
            <td className="px-4 py-2 border">{data.draws}</td>
            <td className="px-4 py-2 border">{data.losses}</td>
            <td className="px-4 py-2 border">{data.goals_scored}</td>
            <td className="px-4 py-2 border">{data.goals_conceded}</td>
            <td className="px-4 py-2 border">{data.goal_difference}</td>
            <td className="px-4 py-2 border">{data.points}</td>
        </tr>
    );
};

export default StandingCard;