import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hire from './components/Hire/Hire';
import Packages from './components/Packages/Packages';
import PostForm from './components/PostForm/PostForm';
import Stripe from './components/Stripe/Stripe';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const JobContext = createContext();



function App() {
  const [context, setContext] = useState({
    employer: { loginEmployer: false }
  })
  return (
    <JobContext.Provider value={[context, setContext]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Navbar/>
          <Login/>
        </Route>
        <Route path="/hire">
          <Navbar/>
          <Hire/>
        </Route>
        <PrivateRoute path="/pack">
          <Navbar/>
          <Packages/>
        </PrivateRoute>
        <Route path="/postForm">
          <Navbar/>
          <PostForm/>
        </Route>
        {/* <Route path="/packid">
          <Navbar/>
          <Stripe/>
        </Route> */}
        <Route path="/packs/:id">
          <Navbar/>
          <Stripe/>
        </Route>
      </Switch>
    </Router>
    </JobContext.Provider>
  );
}

export default App;
