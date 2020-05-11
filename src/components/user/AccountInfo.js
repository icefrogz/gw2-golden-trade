import React, { useState, useEffect } from "react";
import guildwars2 from "../../api/guildwars2";
const AccountInfo = () => {
  const apiKey = localStorage.getItem("apiKey");
  const [accountInfo, setaccountInfo] = useState({});

  async function AccountInfo() {
    await guildwars2
      .get("/account", {
        params: {
          access_token: apiKey,
        },
      })
      .then((response) => {
        setaccountInfo(response.data);
      });
    return null;
  }
  useEffect(() => {
    AccountInfo();
  }, [apiKey]);

  return <div className="container">{accountInfo.name}</div>;
};

export default AccountInfo;
