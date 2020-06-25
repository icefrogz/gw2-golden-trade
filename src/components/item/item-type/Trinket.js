import React from "react";

const Trinket = ({ details }) => {
  return (
    <div>
      {details.type}
      <div>
        Unused
        {details.infusion_slots &&
          details.infusion_slots.map((flagsies) =>
            flagsies.flags.map((infus) => infus)
          )}
        Slot
      </div>

      {details.infix_upgrade.attributes.map((test) => (
        <div>
          <div>
            +{test.modifier} {test.attribute}{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trinket;
