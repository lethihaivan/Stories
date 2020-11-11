//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useParams
} from "react-router-dom";

import {list, create, getById} from '../src/services/chapters'

import React , {useEffect, useState} from 'react';
import axios  from 'axios';
import { Chapter } from './pages/chapters/Chapter';
import { ChapterRouter } from './pages/chapters/ChapterRoute';


function App() {
  let [post, setPost] = useState({});
  useEffect(()=> {
    // axios.get('http://localhost:3000/posts/1')
    // .then(function (response) {
    //   setPost(response.data);
    //  // console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  })
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route path='/chapters' component={ChapterRouter}></Route>
  <Route path='/admin' render={(props) => <div>admin</div>}></Route>
          <Route exact path='' render={(props) => <div>Home</div>}></Route>
        </Switch>
      </Router>
    </div>
  );
}
function Page(){
  return (
    <div>
      <header className= 'App-header'>
        <Link to = "/">Home</Link>
        <Link to = "/about/1">About</Link>
        <Link to = "/dashboard">Dashboard</Link>
      </header>
        <main>
          <Switch>
             <Route exact path ="/"  component = { Home}  />
             <Route path ="/about/:id"  component = { About}  />
             <Route path ="/dashboard"  component = { Dashboard}  />
             <Home />
          </Switch>  
        </main>
        <footer>
          Footer Page
        </footer>
      
    </div>
  )

}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(props) {
  console.log(props.match.params.id);
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default App;
//json-server --watch db.json