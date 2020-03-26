import React, { useEffect, useState } from "react";
import guildwars2 from "../api/guildwars2";
const AchievementInfo = ({ title, sections }) => {
  const [dailies, setDailies] = useState([]);
  useEffect(() => {
    const achievementDaily = async () => {
      const response = await guildwars2.get("achievements", {
        params: {
          ids: sections.map((k) => k.id).join(",")
        }
      });

      setDailies(response.data);
    };
    achievementDaily();
  }, []);
  return (
    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-heading">{title}</div>

        <div className="panel-body">
          <ul className="list-group">
            {dailies.map((j) => (
              <li key={j.id} className="list-group-item">
                {j.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AchievementInfo;
