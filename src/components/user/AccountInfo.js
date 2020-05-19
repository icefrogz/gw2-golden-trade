import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import guildwars2 from "../../api/guildwars2";
const AccountInfo = () => {
  const apiKey = useSelector((state) => state.apiKey.apiKey);

  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    async function getAccountInfo() {
      await guildwars2
        .get("/account", {
          params: {
            access_token: apiKey,
          },
        })
        .then((response) => {
          setAccountInfo(response.data);
        });
      return null;
    }

    if (apiKey && apiKey.length > 0) {
      getAccountInfo();
    } else {
      setAccountInfo({});
    }
  }, [apiKey]);

  return <div className="container">{accountInfo.name}</div>;
};

export default AccountInfo;
