import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useManagement from '../customHook/useManagement';

const ManagementCard = ({data,index}) => {

    const axiosSecure = useAxiosSecure()
    const [,refetch] = useManagement()

    const handleDelete = (id) => {
        
        axiosSecure.delete(`/management/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0 ){
                refetch()
            }
        })
    }


    return (
        <tr key={data._id} className='hover:bg-gray-100'>

            <td className="px-4 py-2 border ">{index + 1}</td>
            <td className="px-4 py-2 border ">{data.nid}</td>
            <td className="px-4 py-2 border ">{data.name}</td>
            <td className="px-4 py-2 border ">{data.role}</td>
            <td className="px-4 py-2 border ">{data.mobile}</td>
            <td className="px-4 py-2 border "> <button onClick={() => handleDelete(data._id)}><FaTrashAlt></FaTrashAlt></button></td>
           
        </tr>
    );
};

export default ManagementCard;