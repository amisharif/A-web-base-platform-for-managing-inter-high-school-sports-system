import React, { useState } from "react";
import SchoolListCard from "../SchoolListCard/SchoolListCard";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Swal } from "sweetalert2";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const ShowSchool = () => {
    const schoolList = useLoaderData();
    const [school, setSchool] = useState(schoolList);
    const axiosSecure = useAxiosSecure();

    //  console.log(schoolList);

    const handleEdit = (id) => {
        axiosSecure.put(`showschool/${id}`).then((data) => {
            console.log(data);
        });
    };

    const handleDelete = (id) => {
        //  console.log(id);

        fetch(`http://localhost:3000/showschool/${id}`, {
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.count === 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "School has been deleted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    const filteredItems = school.filter(
                        (item) => item._id !== id
                    );
                    setSchool(filteredItems);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="pl-10 bg-slate-200 w-full pt-5">
            <div className="">
                <table className="table ">
                    <tbody className="mx-auto">
                        {school.map((sc, index) => (
                            <tr key={sc._id}>
                                <td className="w-10">
                                    <a
                                        key={sc._id}
                                        href={`/admin/showschool/${sc.id}`}
                                    >
                                        {index + 1}
                                    </a>
                                </td>
                                <td className="w-80">
                                    <a
                                        key={sc._id}
                                        href={`/admin/showschool/${sc.id}`}
                                    >
                                        {sc.name}
                                    </a>
                                </td>
                                {/* <td>{sc._id}</td> */}
                                <td className="w-20">
                                    <button
                                        key={sc.id} // Pass `sc.id` for unique key
                                        onClick={() => {
                                            handleDelete(sc._id);
                                        }}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <FaTrash className="h-4 w-4" />
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/admin/editschool/${sc._id}`}>
                                        <FaEdit></FaEdit>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowSchool;
