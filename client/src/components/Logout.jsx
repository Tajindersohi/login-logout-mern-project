import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/thunks';
// import { logout } from '../features/auth/authSlice'; // Assuming this action clears the authentication state

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Dispatch logout action to clear authentication state
    dispatch(logout());

    // Clear any persisted user data (if stored in localStorage or sessionStorage)
    localStorage.removeItem('user');

    // Redirect to login page
    // navigate('/login');
  }, [dispatch, navigate]);

  return null; // Since this component doesn't render anything
};

export default Logout;
