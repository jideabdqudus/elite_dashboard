import React, { Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Investments from "./pages/Investments";
import Portfolio from "./pages/Portfolio";
import History from "./pages/History"

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/dashboard/plans" component={Plans} />
          <Route exact path="/dashboard/investments" component={Investments} />
          <Route exact path="/dashboard/portfolio" component={Portfolio} />
          <Route exact path="/dashboard/portfolio" component={Portfolio} />
          <Route exact path="/dashboard/history" component={History} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
