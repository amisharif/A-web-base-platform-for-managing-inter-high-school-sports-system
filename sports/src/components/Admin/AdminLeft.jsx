import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const AdminLeft = () => {
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
                            <ul className="menu p-4 w-80 min-h-full  text-base-contain text-white">
                                {/* Sidebar content here */}
                                <div className="hover:bg-sky-700 p-2 px-8">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/admin/showschool"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Show all school
                                    </NavLink>
                                </div>

                                <div className="hover:bg-sky-700 p-2 px-8">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/admin/addschool"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Add new school
                                    </NavLink>
                                </div>
                                <div className="hover:bg-sky-700 p-2 px-8">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/admin/createfixture"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Create Fixture
                                    </NavLink>
                                </div>

                                <div className="hover:bg-sky-700 p-2 px-8">
                                    <NavLink
                                        style={{ padding: "10px" }}
                                        to="/admin/knockoutmatch/groupstage"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "active"
                                                : "notActive"
                                        }
                                    >
                                        Update Match Score
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

export default AdminLeft;