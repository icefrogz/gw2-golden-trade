import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Achievements from "./Achievements";
import TradingPostMenu from "./TradingPostMenu";
import UserInfo from "./user/UserInfo";
const App = () => (
  <>
    <Header />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/achievements">
        <Achievements />
      </Route>
      <Route path="/trading-post">
        <TradingPostMenu />
      </Route>
      <Route path="/token-info">
        <UserInfo />
      </Route>
    </Switch>
  </>
);

export default App;
