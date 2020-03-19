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
      console.log(response.data);
      setDailies(response.data);
    };
    achievementDaily();
  }, []);
  return (
    <div>
      <div>{dailies.map((j) => j.name)}</div>
    </div>
  );
};

export default AchievementInfo;
