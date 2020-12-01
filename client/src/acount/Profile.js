import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;