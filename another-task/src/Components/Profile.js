import React from 'react';
import {Link} from "react-router-dom";

export const Profile = ({logout}) => {
  return (
    <div>
        <Link to="/dashboard">DashBoard</Link>
        <h1>You Logged in </h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile;