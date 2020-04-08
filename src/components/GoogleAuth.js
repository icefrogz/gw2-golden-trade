import React, { useEffect, useState } from "react";
const KEY =
  "862357562992-6ef84pk3baeh8o71hknmqh6d7iqvquaq.apps.googleusercontent.com";
const SECRET = "NDBLyBSQ07mAcuP4ieRpczjc";

const GoogleAuth = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [auth, setAuth] = useState(null);

  function renderAuthButton() {
    if (isSignedIn) {
      return <div> I am signed in</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }

  function onAuthChange() {}

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: KEY,
          scope: "email",
        })
        .then(() => {
          const newAuth = window.gapi.auth2.getAuthInstance();
          setAuth(newAuth);
          setSignedIn(newAuth.isSignedIn.get());
          // newAuth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }, []);
  return <div>{renderAuthButton()}</div>;
};
export default GoogleAuth;
