import React from "react";
import Armor from "./item-type/Armor";
import BackItem from "./item-type/BackItem";
const ItemType = ({ type = null, details }) => {
  switch (type) {
    case "Armor":
      return <Armor details={details} />;
    case "Back":
      return <BackItem details={details} />;
    default:
      return null;
  }
};

export default ItemType;
