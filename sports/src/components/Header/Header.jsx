import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { connectAuthEmulator } from 'firebase/auth';


const Header = () => {



    const { user, logOut,setUser } = useContext(AuthContext);
    const nevigate = useNavigate();
    const data = localStorage.getItem('userData');
    const dataItem = JSON.parse(data)

    
   
    const handleSignOut =()=>{
        // logOut()
        //     .then(() => {
                
        //     }).catch((error) => {
        //         // An error happened.
        //     });
            localStorage.setItem('userData',null);
            setUser(null)
            nevigate('/')

    }

   

    

    return (
        <div className="head-container bg-cyan-950 text-white py-2">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    {/* <a className="btn btn-ghost text-xl"></a> */}
                    <Link to="/" className="text-3xl">
                        Sports
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex font-sans">
                    <ul className="menu menu-horizontal px-1 text-base space-x-5">
                        <NavLink
                            to="/matchscore/1stround"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Match Score
                        </NavLink>
                        <NavLink
                            to="/standing"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Standing
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Statistics
                        </NavLink>

                        {dataItem?.password === "DPE123" && (
                            <NavLink
                                to={`players/${user?.eiin}`}
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                Team-Info
                            </NavLink>
                        )}

                        <NavLink
                            to={"/players"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Players
                        </NavLink>
                        <NavLink
                            to={`/blog`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to={`/management`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Management
                        </NavLink>
                        <NavLink
                            to="/history"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            History
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Gallery
                        </NavLink>
                        {dataItem?.eiin === "admin" && (
                            <NavLink
                                to="/admin/showschool"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                Admin
                            </NavLink>
                        )}

                        {/* <li>
                            <Link to="/matchscore">Match Score</Link>
                        </li>
                        <li>
                            <Link to="/standing">Standing</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/statistics">Statistics</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/admin/showschool">Admin</Link>
                        </li> */}
                        {/* <li>
                            <Link to={`players/${user?.eiin}`}>Team-Info</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/players">Players</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/blog">Blog</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/management">Management</Link>
                        </li> */}
                        {/* <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li> */}
                        {/* <li><Link to="/addmatch">Add-Match</Link></li> */}
                        {/* ------------------------------------------------------------------
                        {
                            user?.eiin === "admin" && user?.password === "admin" && 
                            <li><Link to="/admin/showschool">Admin</Link></li>
                        }
                        {
                            user?.eiin && user?.eiin !=="admin" &&
                            <li><Link to={`teaminfo/${user?.eiin}`}>Team-Info</Link></li>
                        }
                        --------------------------------------------------------------------- */}
                        {/* <NavLink to="/addmatch">Add-Match</NavLink> */}
                        {/* <li>
                            {
                                user ? <Link to={`teaminfo/${user.email}`}>Team-Info</Link>
                                    : <Link to="/login">Team-Info</Link>
                            }
                            
                            
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {dataItem ? (
                        <button onClick={handleSignOut} className="btn">
                            Sign out 
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn">Log in</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;