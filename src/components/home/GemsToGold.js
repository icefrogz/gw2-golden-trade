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
          quantity: gemsToConvert,
        },
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
    <div className="col">
      <div className="card align-middle ">
        <div className="card-body">
          <p className="card-text">
            {`Current Convertion Gold is : ${defaultGold} Gems is: 100`}
          </p>

          <form>
            <div className="form-group ">
              <label htmlFor="gem" className="m-2">
                <FontAwesomeIcon className="mr-2" icon={faGem} />
                <span>{gems}</span>
              </label>

              <label htmlFor="exchangeAlt" className="m-2">
                <FontAwesomeIcon className="" icon={faArrowRight} />
              </label>

              <label htmlFor="coins" className="m-2">
                <FontAwesomeIcon className="mr-2" icon={faCoins} />
                <span>{gold}</span>
              </label>
            </div>

            <div className="form-group">
              <label form="customExchange">Custom Exchange Gems</label>
              <input
                type="number"
                className="form-control"
                id="customExchange"
                value={gems}
                onChange={(e) => setGems(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GemsToGold;
