import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Achievements from "./Achievements";
const App = () => (
  <>
    <Header />

    <Switch>
      <Route path="/achievements">
        <Achievements />
      </Route>
    </Switch>
  </>
);

export default App;
