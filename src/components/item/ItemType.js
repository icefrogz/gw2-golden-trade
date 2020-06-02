import React from 'react';
import Armor from './item-type/Armor'

const ItemType = ({ type = null, details }) => {
  switch(type) {
    case 'Armor':
      return <Armor details={details} />
    default:
      return null
  }
}

export default ItemType