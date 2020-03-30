import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Achievements from "./Achievements";
const App = () => (
  <>
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route path="/achievements">
            <Achievements />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
