import React, { useEffect, useState } from "react";
import { itemDetails } from "../../../helper/itemDetails";
const BackItem = ({ details }) => {
  const [jewel, setJewel] = useState(null);

  useEffect(() => {
    if (details.suffix_item_id)
      itemDetails(details.suffix_item_id).then((response) => {
        setJewel(response);
      });
  }, [details.suffix_item_id]);
  return jewel ? (
    <div>
      <div>
        <div className={`text-${jewel.rarity.toLowerCase()}`}>
          <img className="item-img" src={jewel.icon} />
          <span className={`text-${jewel.rarity.toLowerCase()}`}>
            {jewel.name}
          </span>
        </div>
        {details.infix_upgrade.attributes.map((test) => {
          return (
            <div>
              + {test.modifier} {test.attribute}
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default BackItem;
