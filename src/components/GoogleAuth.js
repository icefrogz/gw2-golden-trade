import React, { useEffect } from "react";
const KEY =
  "862357562992-6ef84pk3baeh8o71hknmqh6d7iqvquaq.apps.googleusercontent.com";
const SECRET = "NDBLyBSQ07mAcuP4ieRpczjc";
const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: KEY,
        scope: "email",
      });
    });
  }, []);
  return <div>Google Auth</div>;
};
export default GoogleAuth;
