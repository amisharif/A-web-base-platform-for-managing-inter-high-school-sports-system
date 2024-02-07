import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const OfficeLogin = () => {

    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email,password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email);
                navigate(location ?. state ? location.state:'/');
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-3/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLogin;