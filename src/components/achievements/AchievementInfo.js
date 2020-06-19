import React, { useEffect, useState } from "react";
import guildwars2 from "../../api/guildwars2";

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
  }, [sections]);
  return (
    <div className="card">
      <div className="card-header text-capitalize">{title}</div>

      <ul className="list-group list-group-flush">
        {dailies.map((j) => (
          <li key={j.id} className="list-group-item">
            {j.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementInfo;
