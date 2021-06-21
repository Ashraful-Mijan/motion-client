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
import Admin from './components/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateUser from './components/PrivateUser/PrivateUser';
import EmployerDashboard from './components/EmployerDashboard/EmployerDashboard';
import EmployerNavbar from './components/EmployerNavbar/EmployerNavbar';
import JobDetails from './components/JobDetails/JobDetails';

export const JobContext = createContext();



function App() {

  const [context, setContext] = useState({
    employer: { loginEmployer: false },
    jobSeekarIsLogin: false,
    email: ''
  })

  return (
    <JobContext.Provider value={[context, setContext]}>
      <Router>
        <Switch>
          <PrivateUser exact path="/">
            <Home />
          </PrivateUser>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/hire">
            <Navbar />
            <Hire />
          </Route>
          <PrivateRoute path="/pack">
            <Navbar />
            <Packages />
          </PrivateRoute>
          <Route path="/postForm">
            <Navbar />
            <PostForm />
          </Route>
          <Route path="/admin">
            <Navbar />
            <Admin />
          </Route>
          <Route path="/packs/:id">
            <Navbar />
            <Stripe />
          </Route>
          <Route path="/job/:id">
            <Navbar />
            <JobDetails/>
          </Route>
          <Route path="/dashboard">
            <Navbar />
            <Dashboard />
          </Route>
          <Route path="/emDashboard">
            <EmployerNavbar/>
            <EmployerDashboard/>
          </Route>
        </Switch>
      </Router>
    </JobContext.Provider>
  );
}

export default App;
