import React from "react";
import guildwars2 from "../../api/guildwars2";
const TokenInfo = () => {
  async function TokenInfo() {
    await guildwars2.get("/tokeninfo");
  }

  return (
    <div class="dropdown ml-1">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Profile
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
};

export default TokenInfo;
