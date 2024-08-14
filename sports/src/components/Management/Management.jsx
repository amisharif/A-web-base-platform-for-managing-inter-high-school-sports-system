import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import ManagementCard from './ManagementCard';
import { FaTrash } from 'react-icons/fa';
import useManagement from '../customHook/useManagement';

const Management = () => {

    // const {management}  = useContext(AuthContext)
    const [management,refetch] = useManagement()
    
    return (
        <div className='w-full'>
            <div className="container mx-auto py-8 w-3/4">
                <h2 className='text-center py-4 text-xl'>Management Team</h2>
                <table className="table w-full text-center rounded-lg shadow">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Serial</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">NID</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Name</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Role</th>
                            <th className="px-4 py-2 bg-gray-200 font-bold">Mobile</th>
                        
                        </tr>

                    </thead>
                    <tbody>
                        {
                           management.map((data,index)=>
                                <ManagementCard data = {data} index = {index} key={data._id}></ManagementCard>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Management;