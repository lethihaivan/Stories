import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import './Acount.css'
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          redirect();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const redirect = () => {
    props.history.push('/')
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (

    <div className="col-md-12" style={{
      "fontSize": "15px"
    }}>
      <div className="card card-container">

        <img
          src="https://www.rd.com/wp-content/uploads/2019/11/heart-book.jpg"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group" >

            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              placeholder="Username"
            />

          </div>

          <div className="form-group">
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span style={{ "fontSize": "20px" }}>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <Link ></Link>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <div style={{
          "textAlign": "center",
          "marginBottom": "15px"
        }}>
          Or login with </div>
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
          Don't have account?
          <Link to={"/register"} >
            Sign Up
                </Link>
        </div>
      </div>

    </div>

  );
};

export default Login;