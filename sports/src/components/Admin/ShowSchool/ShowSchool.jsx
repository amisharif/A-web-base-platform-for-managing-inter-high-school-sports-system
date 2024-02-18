import React, { useState } from 'react';
import SchoolListCard from '../SchoolListCard/SchoolListCard';
import { Link, useLoaderData } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const ShowSchool = () => {

    const schoolList  = useLoaderData();
  //  console.log(schoolList);
  const [school,setSchool]= useState(schoolList);

    const handleDelete = (id)=>{
      //  console.log(id);
    

        fetch(`http://localhost:3000/showschool/${id}`, {
            method:'POST'
        })
            .then(response =>response.json())
            .then(data => {
                console.log(data);
                if(data.count===1){


                const filteredItems = school.filter(item => {
                    return item._id !== id;
                });
                setSchool(filteredItems);
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });


    }

    return (
        <div className="pl-10 bg-slate-200 w-full pt-5" >
            <div className="">
                <table className="table ">
    
                    <tbody className='mx-auto'>    
                        {
                            school.map((sc,index)=>
                                <Link to={`/admin/showschool/${sc.id}`}>
                                    <div className="">
                                        <tr className=' hover:bg-slate-100 w-2/4'>
                                            <th>{index + 1}</th>
                                            <td className='w-80'>{sc.name}</td>
                                            {/* <td>{sc._id}</td> */}
                                            <td> <button
                                                onClick={() => { handleDelete(sc._id) }}
                                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <FaTrash className="h-4 w-4" />
                                            </button></td>
                                        </tr>
                                    </div>
                                   
                            </Link>
                               
                            )
                        }
                    </tbody>
                </table>
            </div>
       </div>
    );
};

export default ShowSchool;