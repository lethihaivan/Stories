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

//import Search from "./components/Search/Search"
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import Footer from "./acount/Footer"
import AdminPage from "./pages/admin/AdminRouter";

const regex = new RegExp(/\/admin/)
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

  if (regex.test(window.location.pathname)) {
    return (
      <Router history={history}>
        <Route path="/admin" component={AdminPage} />
      </Router>
    )
  }

  return (
    // <Provider store={store} >
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Web Stories
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
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

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
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

            <Route exact path="/stories/:storyId/chapters"
              render={props => <GetChapterOfStory {...props.match.params} />} />


            <Route exact path="/stories/:id/:index" component={Chapter} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardAuthor} />
          </Switch>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </Router>
    // </Provider>


  );
};

export default App;