import React from "react";

const Consumable = ({ details }) => {
  return (
    <div>
      {details.duration_ms && (
        <div>{`Duration: ${details.duration_ms / 60000}m`}</div>
      )}
      <div>{details.type}</div>
      {details.icon && details.description && (
        <table>
          <tr>
            <td>
              <img src={details.icon} />
            </td>
            <td>
              <div>{`${details.description}`}</div>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default Consumable;
