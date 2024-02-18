import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Auth/Firebase/Firebase.config';
import Swal from 'sweetalert2'


const AddSchool = () => {

    const auth = getAuth(app);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e)=>{

        e.preventDefault();
        const name = e.target.name.value;
        const id = e.target.eiin.value;
        const password = e.target.password.value;


        const newUser  ={
            name,
            id,
            password
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

        

        // createUser(email,password)
        // .then(result=>{

        //     updateProfile(auth.currentUser, {
        //         displayName: name,
                
        //     }).then((result) => {
        //         // Profile updated!
        //         console.log('updated profile name',auth.currentUser.displayName);
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "School added successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         // ...
        //         // alert('added successfuly');
        //         // console.log(result.user);
               
        //     }).catch((error) => {
        //          alert('failed');
                
        //     });
        // })
        // .catch(error=>{
        //     alert('failed to add school');
        //     console.log(err);  
        // })


    }
    return (
        <div className='w-full'>
            <div className=" min-h-full bg-slate-200">
                <div className=" w-full pt-10">
                  
                    <div className="mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        
                        <form className="card-body" onSubmit={handleSubmit}>
                            <h1 className="text-center text-3xl font-bold">Add New School!</h1>  
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text">School Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="School name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">EIIN</span>
                                </label>
                                <input type="text" name='eiin' placeholder="EIIN" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSchool;