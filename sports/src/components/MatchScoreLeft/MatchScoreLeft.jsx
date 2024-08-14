import React from 'react';
import { NavLink } from 'react-router-dom';

const MatchScoreLeft = () => {
    return (
        <div>
            <div className="">
                <div className="left pt-12">
                    <div className="drawer lg:drawer-open">
                        <input
                            id="my-drawer-2"
                            type="checkbox"
                            className="drawer-toggle"
                        />

                        <div className="drawer-side">
                            <ul className="menu  w-80 min-h-full  text-base-contain text-white">
                                {/* Sidebar content here */}
                                <div className="hover:bg-sky-700 p-2 px-8 border border-slate-500">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/matchscore/1stround"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Group Stage
                                    </NavLink>
                                </div>
                                <div className="hover:bg-sky-700 p-2 px-8 border-x border-slate-500">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/matchscore/roundof16"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Round of 16
                                    </NavLink>
                                </div>

                                <div className="hover:bg-sky-700 p-2 px-8 border border-slate-500">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/matchscore/qfinal"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Quarter final
                                    </NavLink>
                                </div>
                                <div className="hover:bg-sky-700 p-2 px-8 border-x border-slate-500">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/matchscore/sfinal"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Semi-final
                                    </NavLink>
                                </div>

                                <div className="hover:bg-sky-700 p-2 px-8 border border-slate-500">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/matchscore/final"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Final
                                    </NavLink>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchScoreLeft;