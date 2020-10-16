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


          <Route path="/addOrder">
            <Order></Order>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/servicelist">
            <ServiceList></ServiceList>
          </Route>

          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/adminservicelist">
            <AdminServiceList></AdminServiceList>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
