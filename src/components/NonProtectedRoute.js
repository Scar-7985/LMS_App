import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../define/Define';

const NonProtectedRoute = () => {
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default NonProtectedRoute;
