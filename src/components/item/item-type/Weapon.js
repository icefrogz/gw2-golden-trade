import React, { useEffect, useState } from "react";
import { itemDetails } from "../../../helper/itemDetails";
const Weapon = ({ details }) => {
  const [sigil, setSigil] = useState(null);
  useEffect(() => {
    if (details.suffix_item_id) {
      itemDetails(details.suffix_item_id).then((response) => {
        setSigil(response);
      });
    }
  }, [details.suffix_item_id]);
  return sigil ? (
    <div>
      <div>Strength: {`${details.min_power} - ${details.max_power}`}</div>
      <div className={`text-${sigil.rarity.toLowerCase()}`}>
        <img className="item-img" src={sigil.icon} />
        <span className="ml-1">{sigil.name}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: sigil.details.infix_upgrade.buff.description,
        }}
      />
      {details.type}
    </div>
  ) : null;
};

export default Weapon;
