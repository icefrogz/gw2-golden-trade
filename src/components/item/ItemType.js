import React from "react";
import Armor from "./item-type/Armor";
import BackItem from "./item-type/BackItem";
import Weapon from "./item-type/Weapon";
import Consumable from "./item-type/Consumable";
import Trinket from "./item-type/Trinket";
import Gizmos from "./item-type/Gizmos";
import Gathering from "./item-type/Gathering";
import Container from "./item-type/Container";
import Bag from "./item-type/Bag";
const ItemType = ({ type = null, details }) => {
  switch (type) {
    case "Armor":
      return <Armor details={details} />;
    case "Back":
      return <BackItem details={details} />;
    case "Weapon":
      return <Weapon details={details} />;
    case "Consumable":
      return <Consumable details={details} />;
    case "Trinket":
      return <Trinket details={details} />;
    case "Gizmo":
      return <Gizmos details={details} />;
    case "Gathering":
      return <Gathering details={details} />;
    case "Container":
      return <Container details={details} />;
    case "Bag":
      return <Bag details={details} />;
    default:
      return null;
  }
};

export default ItemType;
