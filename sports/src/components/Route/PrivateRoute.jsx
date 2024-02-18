import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // if(loading) return <span className='loading loading-infinity loading-lg'></span>
    if (user) return children;
    return <Navigate  to='/login'></Navigate>
   // return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;