// client/src/utils/logout.js

const logout = () => {
    // Remove token or user data from local storage
    localStorage.removeItem('token');
    
    // Redirect to login page or home
    window.location.href = '/login';
  };
  
  export default logout;
  