import React from 'react';
import MatchScoreLeft from '../MatchScoreLeft/MatchScoreLeft';
import { Outlet } from 'react-router-dom';

const AllScore = () => {
    return (
        <div className="bg-cyan-900">
            <div className="flex">
                <MatchScoreLeft></MatchScoreLeft>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AllScore;