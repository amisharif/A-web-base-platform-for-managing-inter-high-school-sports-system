import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import StandingCard from './StandingCard';
import { useEffect, useRef } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

const Standing = () => {



    return (
        <div className="min-h-[900px]">
            <nav class="bg-gray-800">
                <div className="flex items-center justify-center text-center">
                    {/* <a href="#" class="text-white w-1/2 bg-slate-400  py-4">Group Stage</a> */}
                    <NavLink
                        to="/standing/groupstage"
                        className="text-white w-1/2 bg-slate-800  py-4 border-r-2 border-slate-100 "
                    >
                        Group Stage
                    </NavLink>
                    <Link
                        to="/standing/knockoutstage"
                        className="text-white w-1/2 bg-slate-800  py-4"
                    >
                        Knockout Stage
                    </Link>
                </div>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default Standing;