import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminLeft from './AdminLeft';

const Admin = () => {
    return (
        <div className='bg-cyan-900'>
           
            <div className="flex">
                <AdminLeft></AdminLeft>
                <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Admin;