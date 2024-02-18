import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { schoolList, setUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const eiin = e.target.eiin.value;
        const password = e.target.password.value;


        const filteredItems = schoolList.filter((item) => item.id.includes(eiin));
        console.log(filteredItems[0]?.name)
        console.log(filteredItems[0]?.password)


        if ((filteredItems[0]?.id === eiin && filteredItems[0]?.password === password)  ) {

            setUser({ eiin, password })
            navigate(`/teaminfo/${eiin}`);
            //console.log(data)
        } else if ((eiin === "admin" && password === "admin")){
            setUser({ eiin, password })
            navigate(`/admin/showschool`);
            setLoading(true)
        }
    }
    return (
        <div>
            <div className="hero .min-h-full bg-base-200 pb-40 pt-6">
                <div className="hero-content flex-col w-3/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">EIIN</span>
                                </label>
                                <input type="text" value="admin" name="eiin" placeholder="EIIN" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" value = "admin" name="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
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

export default Login;