import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"
import axios from "axios";

import authHeader from "../services/auth-header";
const Profile = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  // const { user: currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser);

  const [usern, setUser] = useState([]);
  useEffect(() => {
    axios.get(`localhost:9091/api/auth/me`, { headers: authHeader() }).then(response => {
      if (response.data) {
        setUser({ usern: response.data, isLoggedIn: true });
        console.log(usern && usern);
      }
    }).catch((error) => {
      console.log(error.response)
    });
  }, []);

  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  console.log(usern && usern);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{usern.username}</strong> Profile
        </h3>
      </header>

      <p>
        <strong>Id:</strong> {usern.id}
      </p>

      <ul>
        {usern.roles &&
          usern.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;