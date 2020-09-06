import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

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
          <Route path="/posts/:postId">
            <PostDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </CategoryContext.Provider>

  );
}

export default App;
