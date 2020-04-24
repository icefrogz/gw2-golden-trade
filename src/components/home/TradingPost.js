import React from "react";

import { Link } from "react-router-dom";
const TradingPost = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
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
  );
};

export default TradingPost;
