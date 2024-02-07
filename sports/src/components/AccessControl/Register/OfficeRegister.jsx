import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';


const OfficeRegister = () => {

    const { createUser,setUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;
        createUser(email,pass)
            .then(userCredential =>{
                const user = userCredential.user;
                console.log(user.email);
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-3/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeRegister;