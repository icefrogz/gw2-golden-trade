import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faCoins } from "@fortawesome/free-solid-svg-icons";
import "../../stylesheets/gemsToGold.scss";
const GemsToGold = () => {
  const [defaultGold, setDefaultGold] = useState(0);
  const [gold, setGold] = useState(0);
  const [gems, setGems] = useState(0);

  async function gemsToGold(gemsToConvert) {
    return await guildwars2
      .get("commerce/exchange/gems", {
        params: {
          quantity: gemsToConvert
        }
      })
      .then((response) => {
        return Math.floor(response.data.quantity / 10000);
      });
  }

  useEffect(() => {
    gemsToGold(100).then((convertedGold) => {
      setDefaultGold(convertedGold);
    });
  }, []);

  useEffect(() => {
    gemsToGold(gems).then((convertedGold) => {
      setGold(convertedGold);
    });
  }, [gems]);

  return (
    <div className="container h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="card align-middle " style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              {`Gold is : ${defaultGold} Gems is: 100`}
            </p>

            <form>
              <div className="form-group ">
                <label htmlFor="gem" className="m-2">
                  <FontAwesomeIcon className="" icon={faGem} />
                </label>

                <label htmlFor="exchangeAlt" className="m-2">
                  <FontAwesomeIcon className="" icon={faArrowRight} />
                </label>

                <label htmlFor="coins" className="m-2">
                  <FontAwesomeIcon className="" icon={faCoins} />
                </label>
              </div>

              <div className="form-group">
                <label form="customExchange">Custom Exchange</label>
                <input
                  type="number"
                  className="form-control"
                  id="customExchange"
                  onChange={}
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
