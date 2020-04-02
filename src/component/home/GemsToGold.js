import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GemsToGold = () => {
  const [gold, setGold] = useState(0);
  const [gems, setGems] = useState(100);
  const gemsToGold = async (gemsToConvert) => {
    const response = await guildwars2.get("commerce/exchange/gems", {
      params: {
        quantity: gemsToConvert
      }
    });
    console.log(response.data);
    setGold(Math.floor(response.data.quantity / 10000));
  };
  useEffect(() => {
    gemsToGold(gems);
  }, [gems]);

  return (
    <div className="container h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="card align-middle " style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              {" "}
              Gold is : {gold} Gems is: {gems}
            </p>
            <FontAwesomeIcon icon="coffee" />
            <form>
              <div className="form-group">
                <label form="customExchange">Custom Exchange</label>
                <input
                  type="text"
                  className="form-control"
                  id="customExchange"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemsToGold;
