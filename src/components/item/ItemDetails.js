import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemDetails } from "../../helper/itemDetails";
import { itemStats } from "../../helper/itemStats";
import { goldConverter } from "../../helper/goldConverter";
import Listings from "../trading-post/Listings";
import ItemType from "./ItemType";
import CurrentTrading from "./item-details/CurrentTrading";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [itemStatus, setItemStats] = useState({});
  useEffect(() => {
    itemDetails(id).then((response) => {
      setItem(response);
    });
  }, [id]);

  useEffect(() => {
    if (item && item.details && item.details.infix_upgrade) {
      itemStats(item.details.infix_upgrade.id).then((response) => {
        setItemStats(response);
      });
    }
  }, [item]);

  return item ? (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card item-details">
            <div className="card-body">
              <div className="d-flex flex-nowrap">
                <img className="mr-2" src={item.icon} />
                <h1 className={`text-${item.rarity.toLowerCase()}`}>
                  {item.name}
                </h1>
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              <ItemType type={item.type} details={item.details} />
              <div> {item.rarity}</div>
              <div>{item.type}</div>
              <div>{`Required Level: ${item.level}`}</div>
              <div> Vendor Value : {goldConverter(item.vendor_value)}</div>
              {item.flags &&
                item.flags.indexOf("AccountBound") > -1 &&
                "Account Bound"}
            </div>
          </div>
        </div>
      </div>
      {item.flags && item.flags.indexOf("AccountBound") === -1 && (
        <div className="row">
          <div className="col">
            <CurrentTrading itemId={item.id} />
            <Listings itemId={item.id} />
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default ItemDetails;
