import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';


const Header = () => {



    const { user, logOut,setUser } = useContext(AuthContext);
    const nevigate = useNavigate();


    const handleSignOut =()=>{
        // logOut()
        //     .then(() => {
                
        //     }).catch((error) => {
        //         // An error happened.
        //     });
            setUser(null)
            nevigate('/')

    }

    

    return (
        <div className="head-container bg-cyan-700 text-white">
            
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    {/* <a className="btn btn-ghost text-xl"></a> */}
                    <Link to="/" className='text-xl'>Sports</Link>
                </div>
                <div className="navbar-center hidden lg:flex font-sans">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/matchscore">Match Score</Link></li>
                        <li><Link to="/standing">Standing</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/admin/showschool">Admin</Link></li>
                        <li><Link to={`teaminfo/${user?.eiin}`}>Team-Info</Link></li>
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