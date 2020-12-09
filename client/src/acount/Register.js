import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect, Link } from 'react-router-dom';
import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validFullName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [fullName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const fullName = e.target.value;
    setEmail(fullName);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const data = {
        username,
        fullName: 'test',
        password,
        role: 'admin'
      }
      dispatch(register(data))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12" style={{ "fontSize": "15px" }}>
      <div className="card card-container">
        <img
          src="https://www.rd.com/wp-content/uploads/2019/11/heart-book.jpg"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div >
              <div className="form-group" >

                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={fullName}
                  onChange={onChangeEmail}
                  validations={[required, validFullName]}
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group">
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" style={{ "fontSize": "20px" }}>Sign Up</button>
              </div>
              <div style={{
                "textAlign": "center",
                "marginBottom": "15px"
              }}>
                Or sign with </div>
              <div class="links">
                <div class="facebook">
                  <i class="fab fa-facebook-f"><span>Facebook</span></i>
                </div>
                <div class="instagram">
                  <i class="fab fa-instagram"><span>Instagram</span></i>
                </div>
              </div>
              <div style={{
                "textAlign": "center",
                "marginBottom": "15px"
              }}>
                Have account?
            <Link to={"/login"}   >
                  Login
                </Link>
              </div>
            </div>
          )
          }
          {successful &&
            (<Redirect to="/home" />)
          }
          {message && (
            <div className="form-group">
              <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;