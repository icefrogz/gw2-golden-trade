import React from "react";
import { Link } from "react-router-dom";

const TokenInfo = () => {
  return (
    <div className="dropdown ml-1">
      <button
        className="btn btn-secondary dropdown-toggle btn-sm"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Profile
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to="/token-info">
          API Keys
        </Link>
      </div>
    </div>
  );
};

export default TokenInfo;
