import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemDetails } from "../../helper/itemDetails";
import { itemStats } from "../../helper/itemStats";
import { goldConverter } from "../../helper/goldConverter";

import ItemType from './ItemType';
import CurrentTrading from './item-details/CurrentTrading';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemStatus, setItemStats] = useState({});
  useEffect(() => {
    itemDetails(id).then((response) => {
      setItem(response);
    });
  }, [id]);

  useEffect(() => {
    if (item.details && item.details.infix_upgrade) {
      itemStats(item.details.infix_upgrade.id).then((response) => {
        setItemStats(response);
      });
    }
  }, [item]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex flex-nowrap'>
                <img className='mr-2' src={item.icon} />
                <h1>{item.name}</h1>
              </div>
              <div>{item.description}</div>
              <div>{item.type}</div>
              <ItemType type={item.type} details={item.details} />
              <div> {item.rarity}</div>
              <div>{`Level: ${item.level}`}</div>
              <div> {goldConverter(item.vendor_value)}</div>
              {item.flags && item.flags.indexOf("AccountBound") > -1 && "Account Bound"}
            </div>
          </div>
        </div>
      </div>
      { (item.flags && item.flags.indexOf("AccountBound") === -1) && (
        <div className='row'>
          <div className='col'>
            <CurrentTrading itemId={item.id}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
