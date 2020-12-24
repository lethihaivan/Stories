import React from "react";
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react"
import "../styles/Profile.css"

import authHeader, { getMe } from "../services/auth-header";
const Profile = (match) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  // const { user: currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser);

  const [usern, setUser] = useState([]);
  useEffect(() => {
    getMe().then(response => {
      const usern = response;
      setUser(usern);
      console.log(response);
    }).catch((error) => {
      console.log(error, 'error')
    });
  }, []);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <body>
      <div class="container main-secction">
        <div class="row">
          <div class=" image-section" style={{ 'width': '100%' }}>
            <img src="https://cdn.videvo.net/videvo_files/video/free/2013-10/thumbnails/Background_08_small.jpg" />
          </div>
          <div class="row user-left-part">
            <div class="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
              <div class="row ">
                <div class="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                  <img src={usern.avatarUrl} class="rounded-circle" />
                </div>
                <div class="" >
                  <button class="btn btn-success btn-block follow"
                    style={{ 'fontSize': '18px', 'width': '200%', 'marginTop': '20px' }}>
                    <Link to={"/library"} >
                      My Library
                      </Link></button>
                  <button class="btn btn-warning btn-block"
                    style={{ 'fontSize': '18px', 'width': '200%', 'marginTop': '20px' }}
                  >     <Link to={`/users/${usern.id}`} key={usern.id, usern.fullName} >
                      Edit Profile
                      </Link></button>
                </div>

              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
              <div class="row profile-right-section-row">
                <div class="col-md-12 profile-header">
                  <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                      <h1>{usern.username}</h1>
                      <h5>My Profile</h5>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth">
                      <a href="/search" class="btn btn-primary btn-block"
                        style={{ 'fontSize': '18px', 'marginTop': '20px' }}>Following</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-8">
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" style={{ 'fontSize': '18px' }}>
                            <i class="fas fa-user-circle"></i> Information</a>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade show active" >
                          <div class="row" style={{
                            'fontSize': '18px', 'marginTop': '20px',
                            'marginLeft': '-500px',
                            'display': 'flex',
                            'fontFamily': "Times New Roman"
                          }}>

                            <div class="col-md-12">
                              <li>Name: {usern.username}</li>
                            </div>
                            <div class="col-md-12">
                              <li>Full Name : {usern.fullName}</li>
                            </div>
                            <div class="col-md-12">
                              <li> Role :{usern.role}</li>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                    <div class="col-md-4 img-main-rightPart">
                      <div class="row">

                        <a href="">
                          <div class="col-md-12 image-right">
                            <img src="https://i.pinimg.com/originals/92/3c/50/923c508dac22439e4f56502f7181e040.jpg" />
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </body>
  );
};

export default Profile;

{/* <div className="container">
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
</div> */}