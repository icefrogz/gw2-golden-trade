import React from "react";
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import ApiKeyForm from './shared/ApiKeyForm';
import SellHistory from "./trading-post/SellHistory";
import BuyHistory from "./trading-post/BuyHistory";

const TradingPost = () => {
  return (
    <div className="container">
      <ApiKeyForm />
      <ul className="nav nav-tabs mt-1" role="tablist">
        <li className="nav-item" id="sell-tab">
          <NavLink className="nav-link" to="/trading-post/sell">
            Sell
          </NavLink>
        </li>
        <li className="nav-item" id="buy-tab">
          <NavLink className="nav-link " to="/trading-post/buy">
            Buy
          </NavLink>
        </li>
      </ul>
      <div className="tab-content" id="tab-content" role="tab">
        <div
          className="tab-pane fade show active"
        >
          <Switch>
            <Route path='/trading-post/sell'>
              <SellHistory />
            </Route>
            <Route path='/trading-post/buy'>
              <BuyHistory />
            </Route>
            <Redirect from='/trading-post' to='/trading-post/sell' />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default TradingPost;
