import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Achievements from "./Achievements";
import TradingPost from "./TradingPost";
import UserInfo from "./user/UserInfo";
import ItemDetails from "../components/item/ItemDetails";
import ItemSearch from "../components/item/item-details/ItemSearch";
import "../assets/stylesheets/application.scss";

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
        <TradingPost />
      </Route>
      <Route path="/token-info">
        <UserInfo />
      </Route>
      <Route path="/item/tp/search">
        <ItemSearch />
      </Route>
      <Route path="/item/:id">
        <ItemDetails />
      </Route>
    </Switch>
  </>
);

export default App;
