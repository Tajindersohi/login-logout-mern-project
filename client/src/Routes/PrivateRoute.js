import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const statess = useSelector((state) => state);
  console.log("isAuthenticated", statess);
  
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
