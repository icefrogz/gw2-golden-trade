import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const GoldToGems = () => {
  const [defaultGems, setDefaultGems] = useState(0);
  const [gold, setGold] = useState(0);
  const [gems, setGems] = useState(0);

  async function goldToGems(coinsToConvert) {
    return await guildwars2
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
                <span>{gold}</span>
                <i className='gw2-icon gw2-icon-gold' />
              </label>

              <label htmlFor="exchangeAlt" className="m-2">
                <FontAwesomeIcon className="" icon={faArrowRight} />
              </label>

              <label htmlFor="faGem" className="m-2">
                <span>{gems}</span>
                <i className='gw2-icon gw2-icon-gem' />
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
