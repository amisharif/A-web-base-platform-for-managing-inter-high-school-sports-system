import React, { useContext, useState } from 'react';
import { useEffect, useRef } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import StandingCard from '../StandingCard';
import useAxiosSecure from '../../useAxiosSecure/useAxiosSecure';
import useStandDataA from '../../customHook/useStandDataA';
import useStandDataB from '../../customHook/useStandDataB';
import useStandDataC from '../../customHook/useStandDataC';
import useStandDataD from '../../customHook/useStandDataD';
import useStandDataE from '../../customHook/useStandDataE';
import useStandDataF from '../../customHook/useStandDataF';
import useStandDataG from '../../customHook/useStandDataG';
import useStandDataH from '../../customHook/useStandDataH';


const GroupStage = () => {


    const { schoolList, standDataA, standDataB, standDataC, standDataD, standDataE, standDataF, standDataG, standDataH } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure();
    const [standDataA_A, refetch] = useStandDataA();
    const [standDataB_A] = useStandDataB();
    const [standDataC_A] = useStandDataC();
    const [standDataD_A] = useStandDataD();
    const [standDataE_A] = useStandDataE();
    const [standDataF_A] = useStandDataF();
    const [standDataG_A] = useStandDataG();
    const [standDataH_A] = useStandDataH();

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-4">Standing</h1>
            <div className="container mx-auto py-8 w-3/4">
                {/* ---------------------Standing A-------------- */}

                <h1 className="text-xl text-center mb-4">Standing A</h1>
                <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {standDataA &&
                            Array.isArray(standDataA) &&
                            standDataA_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>

                {/* ---------------------Standing B-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing B</h1>
                <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataB &&
                            Array.isArray(standDataB) &&
                            standDataB_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>

                {/* ---------------------Standing C-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing C</h1>
                <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataC &&
                            Array.isArray(standDataC) &&
                            standDataC_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
                {/* ---------------------Standing D-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing D</h1>
                <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataD &&
                            Array.isArray(standDataD) &&
                            standDataD_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
                {/* ---------------------Standing E-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing E</h1>
                <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataE &&
                            Array.isArray(standDataE) &&
                            standDataE_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
                {/* ---------------------Standing F-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing F</h1>
                <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataF &&
                            Array.isArray(standDataF) &&
                            standDataF_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
                {/* ---------------------Standing G-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing G</h1>
                <table className="table w-full text-center rounded shadow bg-cyan-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-cyan-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataG &&
                            Array.isArray(standDataG) &&
                            standDataG_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
                {/* ---------------------Standing H-------------- */}

                <h1 className="text-xl text-center mb-4 mt-6">Standing H</h1>
                <table className="table w-full text-center rounded shadow bg-teal-900 text-white">
                    <thead className="text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pos
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Team
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                MP
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                W
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                D
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                L
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GF
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GA
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                GD
                            </th>
                            <th className="px-4 py-2 bg-teal-950 font-bold">
                                Pts
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {standDataH &&
                            Array.isArray(standDataH) &&
                            standDataH_A.map((data, index) => (
                                <StandingCard
                                    key={data._id}
                                    schoolList={schoolList}
                                    index={index}
                                    data={data}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GroupStage;