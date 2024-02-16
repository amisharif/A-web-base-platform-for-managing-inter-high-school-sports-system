import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';


const Header = () => {



    const { user, logOut,setUser } = useContext(AuthContext);


    const handleSignOut =()=>{
        logOut()
            .then(() => {
                
            }).catch((error) => {
                // An error happened.
            });
    }

    

    return (
        <div className="head-container bg-slate-600 text-white">
            
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Match Socre</Link></li>
                            
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Match Score</Link></li>
                        <li><Link to="/standing">Standing</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/addmatch">Add-Match</Link></li>

                        <li>
                            {
                                user ? <Link to={`teaminfo/${user.email}`}>Team-Info</Link>
                                    : <Link to="/login">Team-Info</Link>
                            }
                            
                            
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleSignOut} className="btn">Sign out</button> : 
                            <Link to="/login"><button className="btn">Log in</button></Link>
                        
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Header;