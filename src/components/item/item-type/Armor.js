import React from 'react';

const Armor = ({ details }) => {
  return (
    <div>
      <div>{details.type}</div>
      <div>{details.weight_class}</div>
      <div>{`Defense: ${details.defense}`}</div>
    </div>
  )
}

export default Armor