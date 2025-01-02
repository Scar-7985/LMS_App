import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import { isAuthenticated } from '../define/Authenticate';

const ProtectedRoutes = () => {

    // const isAuthenticated = secureLocalStorage.getItem('login_id');
    // const isAuthenticated = window.localStorage.getItem('login_id');
    // console.log("isAuthenticated => ", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
