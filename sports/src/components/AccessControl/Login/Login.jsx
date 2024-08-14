import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { schoolList, user, setUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = localStorage.getItem("userData");
        if (storedData !== null) {
            setUser(JSON.parse(storedData));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(schoolList);
        const eiin = e.target.eiin.value;
        const password = e.target.password.value;

        const userData = {
            eiin,
            password,
        };
        const userDataStringify = JSON.stringify(userData);
        localStorage.setItem("userData", userDataStringify);

        const filteredItems = schoolList.filter((item) =>
            item.id.includes(eiin)
        );
        // console.log(filteredItems[0]?.name);
        // console.log(filteredItems[0]?.password);

        if (
            filteredItems[0]?.id === eiin &&
            filteredItems[0]?.password === password
        ) {
            setUser({ eiin, password });
            navigate(`/players/${eiin}`);
            //console.log(data)
        } else if (eiin === "admin" && password === "admin") {
            setUser({ eiin, password });
            navigate(`/admin/showschool`);
        }
        // else{
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Enter valid information!",

        //     });
        // }
    };
    return (
        <div className="bg-slate-200">
            <div className="hero .min-h-full bg-slate-200 pb-40 pt-6">
                <div className="hero-content flex-col w-3/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">EIIN</span>
                                </label>
                                <input
                                    type="text"
                                    name="eiin"
                                    placeholder="EIIN"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
