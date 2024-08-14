import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const KnockoutMatchTop = () => {
    return (
        <div className="min-h-[900px] w-full bg-slate-200">
            <nav className="bg-gray-800">
                <div className="flex items-center justify-center text-center">
                    {/* <a href="#" class="text-white w-1/2 bg-slate-400  py-4">Group Stage</a> */}

                    <NavLink
                        to="/admin/knockoutmatch/groupstage"
                        className={({ isActive }) =>
                            `w-1/2 bg-slate-800 py-4 border-r-2 border-slate-100 ${
                                isActive ? "text-blue-500" : "text-white"
                            }`
                        }
                    >
                        Group Stage
                    </NavLink>
                    <NavLink
                        to="/admin/knockoutmatch/roundof16"
                        className={({ isActive }) =>
                            `w-1/2 bg-slate-800 py-4 border-r-2 border-slate-100 ${
                                isActive ? "text-blue-500" : "text-white"
                            }`
                        }
                    >
                        Round of 16
                    </NavLink>

                    <NavLink
                        to="/admin/knockoutmatch/qfinal"
                        className={({ isActive }) =>
                            `w-1/2 bg-slate-800 py-4 border-r-2 border-slate-100 ${
                                isActive ? "text-blue-500" : "text-white"
                            }`
                        }
                    >
                        Quarter Final
                    </NavLink>
                    <NavLink
                        to="/admin/knockoutmatch/sfinal"
                        className={({ isActive }) =>
                            `w-1/2 bg-slate-800 py-4 border-r-2 border-slate-100 ${
                                isActive ? "text-blue-500" : "text-white"
                            }`
                        }
                    >
                        Semi Final
                    </NavLink>
                    <NavLink
                        to="/admin/knockoutmatch/final"
                        className={({ isActive }) =>
                            `w-1/2 bg-slate-800 py-4 border-r-2 border-slate-100 ${
                                isActive ? "text-blue-500" : "text-white"
                            }`
                        }
                    >
                        Final
                    </NavLink>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default KnockoutMatchTop;