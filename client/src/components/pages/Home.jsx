import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

useEffect(()=>{
  getContacts();
},[])
const getContacts = async() => {
  try {
    const response = await fetch("http://localhost:5000/api/contacts");
    const data = await response.json();
    // dispatch(setContacts(data.myContacts));
    console.log("datat", data);

  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
}

  return (
    <div>
        This is home Page
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Home
