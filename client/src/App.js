import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ChapterDetail from "./pages/chapters/ChapterDetail";
import Story from "./pages/stories/Story";
import GetChapterOfStory from "./pages/stories/GetChapterOfStory";
import Chapter from "./pages/chapters/Chapter";
import Login from "./acount/Login";
import Register from "./acount/Register";
import Home from "./acount/Home";
import Profile from "./acount/Profile";
import BoardUser from "./acount/BoardUser";
import BoardAuthor from "./acount/BoardAuthor";
import BoardAdmin from "./acount/BoardAdmin";
import Footer from "./acount/Footer"
import AppPagination from "./components/Pagination/AppPagination"
import SearchStory from "./components/Search/SearchStory"
import SrotySearch from "./components/Search/SrotySearch"
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";

import AdminPage from "./pages/admin/AdminRouter";

//const regex = new RegExp(/\/admin/)
const App = () => {
  const [showAuthorBoard, setShowAuthorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  console.log(currentUser);
  useEffect(() => {
    console.log(window.location.pathname, '123123')

    if (currentUser) {
      //setShowAuthorBoard(currentUser.roles.includes("admin"));
      //setShowAdminBoard(currentUser.role.includes("admin"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  /* 
    if (regex.test(window.location.pathname)) {
      return (
        <Router history={history}>
          <Route path="/admin" component={AdminPage} />
        </Router>
      )
    }
   */
  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Web Stories
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item"
              style={{
                'marginTop': '20px',
                'marginLeft': '80px'

              }}>
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <SearchStory></SearchStory>
            </li>
            {showAuthorBoard && (
              <li className="nav-item">
                <Link to={"/author"} className="nav-link">
                  Author Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  HaiVan
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                </Link>
                </li>

              </div>
            )}
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/chapter/:id" component={ChapterDetail, Chapter} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/stories/:id" component={Story} />
            <Route exact path="/stories/:id/:index" component={Chapter} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardAuthor} />
            <Route exact path="/stories/:storyId/chapters" render={props =>
              <AppPagination {...props.match.params} />} />
            <Route exact path="/search/:keyword" component={SrotySearch} />
            <Router history={history}>
              <Route exact path="/stories/:storyId/chapters"
                render={props => <GetChapterOfStory {...props.match.params} />} />
            </Router>

          </Switch>
        </div>
        {/*  <div><Footer></Footer></div> */}
      </div>

    </Router>
    // </Provider>


  );
};

export default App;