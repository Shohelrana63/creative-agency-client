import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Review from './components/Dashboard/Review/Review';
import Login from './components/Login/Login';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import AdminServiceList from './components/Dashboard/ServiceList/AdminServiceList/AdminServiceList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';





export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>


          <PrivateRoute path="/addOrder">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/servicelist">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/adminservicelist">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
