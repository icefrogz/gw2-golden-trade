import React from "react";

import { Link } from "react-router-dom";
const UserInfoCard = () => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Account Info</h5>
          <p className="card-text">Account Info</p>
          <Link to="/trading-post" className="btn btn-primary">
            Trading Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
