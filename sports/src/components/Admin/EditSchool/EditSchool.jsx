import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const EditSchool = () => {
    const school = useLoaderData();
    const axiosSecure = useAxiosSecure();
    //console.log(school)
    const [district, setDistrict] = useState("");

    const handleEditSchool = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const id = e.target.eiin.value;
        const password = e.target.password.value;

        const editedUser = {
            name,
            id,
            password,
            district,
        };
      

        axiosSecure.put(`/showschool/${school._id}`, editedUser).then((res) => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div className="p-16 w-full bg-slate-200">
            <h2 className="text-3xl font-extrabold">Edit School: </h2>
            <form onSubmit={handleEditSchool} className="mt-6">
                {/* form name and EIIN row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">School Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                defaultValue={school.name}
                                name="name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">EIIN</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="eiin"
                                defaultValue={school.id}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form District and password row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">District</span>
                        </label>
                        <label className="input-group">
                            <select
                                id="district"
                                name="district"
                                value={district}
                                onChange={(event) =>
                                    setDistrict(event.target.value)
                                }
                                className="input input-bordered w-full"
                                required
                            >
                                <option defaultValue={school.district}>
                                    {school.district}
                                </option>
                                {/* Add your actual formation options here */}
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chattogram">Chattogram</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Mymensingh">Mymensingh</option>
                                {/* ... more options */}
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="password"
                                defaultValue={school.password}
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-block bg-slate-300"
                />
            </form>
        </div>
    );
};

export default EditSchool;
