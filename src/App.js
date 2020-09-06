import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

export const CategoryContext = createContext();

function App() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (

    <CategoryContext.Provider value={posts}>
      <Navbar />

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend/:friendId">
            {/* <FriendDetail /> */}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </Router>
    </CategoryContext.Provider>

  );
}

export default App;
