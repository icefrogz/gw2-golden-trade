import React from "react";
import guildwars2 from "../api/guildwars2";
class App extends React.Component {
  something = async test => {
    await guildwars2
      .get("account", {
        params: {}
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return <div>{console.log(this.something())}</div>;
  }
}

export default App;
