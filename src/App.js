import React, { Fragment,useState,useEffect } from "react";
import { Route, BrowserRouter, Switch,Link,useHistory } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import {useDispatch,useSelector,} from 'react-redux'
import Investments from "./pages/Investments";
import Portfolio from "./pages/Portfolio";
import {setStateSuccess,setStateError,getUserProfile} from './store/action/authAction'
// import { Link,useHistory } from "react-router-dom";

const App = () => {
const  dispatch = useDispatch()
const  history = useHistory()

  const  {error,success}= useSelector(state => state?.auth)

  useEffect(() => {
   console.log('ss')

   return getUserProfile(dispatch)

  //  ()=>{
  //  } 
  }, [])
  
  return (
    <Fragment>
       {success}
      {error}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/dashboard/plans" component={Plans} />
          <Route exact path="/dashboard/investments" component={Investments} />
          <Route exact path="/dashboard/portfolio" component={Portfolio} />
          <Route exact path="/dashboard/portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
