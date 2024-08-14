import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Auth/Firebase/Firebase.config';
import Swal from 'sweetalert2'


const AddSchool = () => {

    const auth = getAuth(app);
    const { createUser } = useContext(AuthContext);
    const [district, setDistrict] = React.useState("");


    const handleAddSchool = (e)=>{

        e.preventDefault();
        const name = e.target.name.value;
        const id = e.target.eiin.value;
        const password = e.target.password.value;


        const newUser  ={
            name,
            id,
            password,
            district
        }

        console.log(newUser)
        const url = "http://localhost:3000/admin/addschool"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        };
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                
                console.log('Response:', data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "School added successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <div className="p-16 w-full bg-slate-200">
            <h2 className="text-3xl font-extrabold">Add New School: </h2>
            <form onSubmit={handleAddSchool} className='mt-6'>
                {/* form name and EIIN row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">School Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="School Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">EIIN</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="eiin" placeholder="EIIN" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form District and password row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className='label-text'>District</span>
                        </label>
                        <label className="input-group">
                            <select
                                id="district"
                                name="district"
                                value={district}
                                onChange={(event) => setDistrict(event.target.value)}
                                className="input input-bordered w-full"
                                required
                            >
                                <option value="">Select District</option>
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
                            <input type="text" name="password" placeholder="Password" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
              
               
                <input type="submit" value="Submit" className="btn btn-block bg-slate-300" />

            </form>
        </div>
    );
};

export default AddSchool;