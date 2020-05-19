import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions/auth";
const KEY =
  "862357562992-6ef84pk3baeh8o71hknmqh6d7iqvquaq.apps.googleusercontent.com";

const GoogleAuth = () => {
  const auth = useRef(null);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  function onSignIn() {
    auth.current.signIn();
  }

  function onSignOut() {
    auth.current.signOut();
  }

  useEffect(() => {
    function onAuthChange(signedIn) {
      //setSignedIn(auth.current.isSignedIn.get());

      if (signedIn) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    }

    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: KEY,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          //get the client status

          // setSignedIn(auth.current.isSignedIn.get());
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
          //set auth accordingly to the status
        });
    });
  }, []);

  if (isSignedIn === null) {
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
};

// export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
export default GoogleAuth;
