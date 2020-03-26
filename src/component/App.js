import React, { useEffect, useState } from "react";
import guildwars2 from "../api/guildwars2";
import Header from "./Header";
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
    <>
      <Header />
      <div className="container">
        <div className="row">
          {Object.entries(achievementsDaily)
            .filter((j) => j[1].length > 0)
            .map((sections) => {
              return (
                <div className="col-sm-3" key={sections[0]}>
                  <AchievementInfo title={sections[0]} sections={sections[1]} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default App;
