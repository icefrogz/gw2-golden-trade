import React, { useEffect, useState } from "react";
import guildwars2 from "../api/guildwars2";
import AchievementInfo from "./AchievementInfo";
const App = () => {
  const [achievementsDaily, setAchievementsDaily] = useState({});
  useEffect(() => {
    const fetchAchievementsDaily = async () => {
      const response = await guildwars2.get("achievements/daily", {
        params: {}
      });

      setAchievementsDaily(response.data);
    };
    fetchAchievementsDaily();
  }, []);

  return (
    <div>
      {Object.entries(achievementsDaily).map((sections) => {
        return (
          <AchievementInfo
            key={sections[0]}
            title={sections[0]}
            sections={sections[1]}
          />
        );
      })}
    </div>
  );
};

export default App;
