import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faCoins } from "@fortawesome/free-solid-svg-icons";
import guildwars2 from "api/guildwars2";

const GoldToGems = () => {
  const [defaultGems, setDefaultGems] = useState(0);
  const [gold, setGold] = useState(0);
  const [gems, setGems] = useState(0);

  function goldToGems(coinsToConvert) {
    return guildwars2
      .get("commerce/exchange/coins", {
        params: {
          quantity: coinsToConvert * 10000
        }
      })
      .then((response) => {
        return response.data.quantity;
      });
  }

  useEffect(() => {
    goldToGems(100).then((convertedGems) => {
      setDefaultGems(convertedGems);
    });
  }, []);

  useEffect(() => {
    goldToGems(gold).then((convertedGems) => {
      setGems(convertedGems);
    });
  }, [gold]);

  return (
    <div className="col">
      <div className="card align-middle ">
        <div className="card-body">
          <p className="card-text">{`Current Convertion Gems is : ${defaultGems} Coins is: 100`}</p>

          <form>
            <div className="form-group ">
              <label htmlFor="coins" className="m-2">
                <FontAwesomeIcon className="mr-2" icon={faCoins} />
                <span>{gold}</span>
              </label>

              <label htmlFor="exchangeAlt" className="m-2">
                <FontAwesomeIcon className="" icon={faArrowRight} />
              </label>

              <label htmlFor="faGem" className="m-2">
                <FontAwesomeIcon className="mr-2" icon={faGem} />
                <span>{gems}</span>
              </label>
            </div>

            <div className="form-group">
              <label form="customExchange">Custom Exchange Gold</label>
              <input
                type="number"
                className="form-control"
                id="customExchange"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoldToGems;
