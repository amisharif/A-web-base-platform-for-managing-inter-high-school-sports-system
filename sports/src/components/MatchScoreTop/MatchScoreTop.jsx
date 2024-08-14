import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminLeft from '../Admin/AdminLeft';

const MatchScoreTop = () => {
    return (
        <div className="bg-cyan-900">
            <div className="flex">
                <AdminLeft></AdminLeft>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MatchScoreTop;