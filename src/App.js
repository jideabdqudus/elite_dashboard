import React, { Fragment,useState,useEffect } from "react";
import {BrowserRouter,
   Switch,useHistory } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import {useDispatch,useSelector,} from 'react-redux'
import Investments from "./pages/Investments";
import Portfolio from "./pages/Portfolio";
import {GuestRoute,ProtectedRoute,AdminRoute} from "./routeProtection/auth";
import {setStateSuccess,setStateError,getUserProfile} from './store/action/authAction'
// import { Link,useHistory } from "react-router-dom";

import History from "./pages/History";
import AdminDash from "./admin/Dashboard";
import Otp from "./pages/otp";
import Products from "./admin/Products";
import Investors from "./admin/Investors";
import AdminHistory from "./admin/History";
import { USER_DATA } from "./store/action/types";
const App = () => {
const  dispatch = useDispatch()
const  history = useHistory()

  const  {error,success,userData}= useSelector(state => state?.auth)

  useEffect(() => {
    if(localStorage.getItem('token') ){
      if(localStorage.getItem('token').startsWith('Bearer ') ){
          getUserProfile(dispatch)
      }
    }
    else{
    }
  },[])
  return (
    <Fragment>
       {success}
      {error}
      {userData.userType}
      <BrowserRouter>
        <Switch>
          <GuestRoute exact path="/" component={Login} />
          <GuestRoute exact path="/otp" component={Otp} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <GuestRoute exact path="/create" component={CreateAccount} />
          <ProtectedRoute exact path="/dashboard/plans" component={Plans} />
          <ProtectedRoute exact path="/dashboard/investments" component={Investments} />
          <ProtectedRoute exact path="/dashboard/portfolio" component={Portfolio} />
          <ProtectedRoute exact path="/dashboard/portfolio" component={Portfolio} />
          <ProtectedRoute exact path="/dashboard/history" component={History} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDash} />
          <AdminRoute exact path="/admin/products" component={Products} />
          <AdminRoute exact path="/admin/investors" component={Investors} />
          <AdminRoute exact path="/admin/history" component={AdminHistory} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
