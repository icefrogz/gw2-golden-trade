import React from "react";

import { Link } from "react-router-dom";
const TradingPostCard = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Trading Post</h5>
          <p className="card-text">
            Track your Trading Post buy and sell progress.
          </p>
          <Link to="/trading-post" className="btn btn-primary">
            Trading Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TradingPostCard;
