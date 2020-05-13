import React, { useState, useEffect } from "react";
import guildwars2 from "../../api/guildwars2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountInfo from "./AccountInfo";
import { faCog, faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import ApiKeyForm from "../shared/ApiKeyForm";
const UserInfo = () => {
  const apiKey = localStorage.getItem("apiKey");
  const [tokenInfoDet, setTokenInfoDet] = useState({});

  useEffect(() => {
    async function userInfo1() {
      await guildwars2
        .get("/tokeninfo", {
          params: {
            access_token: apiKey,
          },
        })
        .then((response) => {
          setTokenInfoDet(response.data);
        });
      return null;
    }

    if (apiKey && apiKey.length > 0) {
      userInfo1();
    }
  }, [apiKey]);

  function removeData() {
    // localStorage.removeItem("apiKey");
    localStorage.setItem("apiKey", "");
    setTokenInfoDet({});
  }

  return (
    <div className="container">
      <ApiKeyForm />

      <table className="table mt-1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Token Name</th>
            <th scope="col">Account </th>
            <th scope="col">Permissions</th>
            <th scope="col">API Keys</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> {tokenInfoDet.name}</td>
            <td>
              <AccountInfo />
            </td>

            <td>
              {tokenInfoDet.permissions && (
                <ul className="list-unstyled">
                  {tokenInfoDet.permissions.map((x) => (
                    <li className="text-capitalize">
                      <FontAwesomeIcon
                        className="mr-1 token-info"
                        icon={faCog}
                      />
                      {x}
                    </li>
                  ))}
                </ul>
              )}
            </td>
            <td>{tokenInfoDet.id} </td>
            <td>
              {apiKey && apiKey.length > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={removeData}
                >
                  Delete Api Key
                </button>
              )}
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
