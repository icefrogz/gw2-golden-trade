import React, { useState, useEffect } from "react";
import guildwars2 from "../../api/guildwars2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountInfo from "./AccountInfo";
import { faCog, faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import ApiKeyForm from "../shared/ApiKeyForm";
const UserInfo = () => {
  const apiKey = localStorage.getItem("apiKey");
  const [tokenInfoDet, setTokenInfoDet] = useState({});
  const [test1, setTest1] = useState([]);
  async function UserInfo1() {
    await guildwars2
      .get("/tokeninfo", {
        params: {
          access_token: apiKey,
        },
      })
      .then((response) => {
        setTokenInfoDet(response.data);
        setTest1(response.data.permissions);
      });
    return null;
  }
  useEffect(() => {
    UserInfo1();
  }, [apiKey]);

  return (
    <div className="container">
      <ApiKeyForm />
      <table class="table">
        {" "}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Token Name</th>
            <th scope="col">Account </th>
            <th scope="col">API Keys</th>
            <th scope="col">Permissions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> {tokenInfoDet.name}</td>
            <td>
              {" "}
              <AccountInfo />
            </td>
            <td>{tokenInfoDet.id}</td>
            <td>
              {test1.map((x) => (
                <span className="ml-1 mr-1">
                  <FontAwesomeIcon className="mr-1 token-info" icon={faCog} />
                  {x}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pt-3">
        How to get Api Keys :
        <ol>
          <li>Login to Arena net website.</li>
          <li>Navigate To Applications .</li> <li>Create New Key.</li>
          <li>
            Copy <FontAwesomeIcon className="" icon={faCopy} /> your new API Key
          </li>
          <li>
            Paste <FontAwesomeIcon className="" icon={faPaste} /> your new API
            Key
          </li>
          <li>Click save and done!</li>
        </ol>
      </div>
    </div>
  );
};

export default UserInfo;
