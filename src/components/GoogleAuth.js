import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const KEY =
  "862357562992-6ef84pk3baeh8o71hknmqh6d7iqvquaq.apps.googleusercontent.com";
const SECRET = "NDBLyBSQ07mAcuP4ieRpczjc";

const GoogleAuth = () => {
  const [isSignedIn, setSignedIn] = useState(null);
  const auth = useRef(null);

  function renderAuthButton() {
    if (isSignedIn == null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOut} type="button" className="btn btn-danger ">
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignIn} type="button" className="btn btn-primary">
          Sign in with <FontAwesomeIcon className="mr-2" icon={faGoogle} />
        </button>
      );
    }
  }

  function onAuthChange() {
    setSignedIn(auth.current.isSignedIn.get());
  }

  function onSignIn() {
    auth.current.signIn();
  }

  function onSignOut() {
    auth.current.signOut();
  }

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: KEY,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          //get the client status

          setSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
          //set auth accordingly to the status
        });
    });
  }, []);
  return <>{renderAuthButton()}</>;
};
export default GoogleAuth;
