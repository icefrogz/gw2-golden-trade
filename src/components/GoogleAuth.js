import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../actions/auth";
const KEY =
  "862357562992-6ef84pk3baeh8o71hknmqh6d7iqvquaq.apps.googleusercontent.com";
const SECRET = "NDBLyBSQ07mAcuP4ieRpczjc";

const GoogleAuth = () => {
  const auth = useRef(null);

  // useSelector itu sama kyk mapStateToProps
  // bedanya cuma kalo mapStateToProps itu set ke props component
  // kalo useSelector ini set ke constant/variable di dalem componentnya

  // const mapStateToProps = (state) => {
  //   return { isSignedin: state.auth.isSignedIn };
  // };
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  // buat panggil actionreducer, perlu pake dispatch
  // soalnya action reducer kamu kan return object,
  // kalo pake dispatch, dispatchnya bakal "dispatch" action kamu trus nanti reducernya terima
  // action kamu kan ada key type, trus ada valuenya kan
  // nanti reducernya bakal match untuk type yg mana
  // baru kalo match, dia bakal update redux statenya.
  // misalnya kalo signIn()
  // action Reducer bakal return value ini:
  // {
  //   type: "SIGN_IN",
  // }
  // nanti reducer kamu bakal terima, trus milih action.type mana yg cocok
  // untuk case ini kan yg cocok kan di authReducer
  // type yg cocok: "SIGN_IN"
  // hbs ini reducernya bakal update redux store pake return value untuk case 'SIGN_IN'
  // return { ...state, isSignedIn: true };
  // ...state <- spread function
  // misalnya state = { isSignedIn: null }
  // trus return { ...state, isSignedIn: true }
  // ...state bakal di spread jadi -> { isSignedIn: null, isSignedIn: true }
  // since yg true yg terakhir, value isSignedIn bakal ke overwrite jadi true
  // alhasil, { ...state, isSignedIn: true } => { isSignedIn: true }
  // tapi kalo state ada key lain, misalnya: { isSignedIn: null, otherKey: 'value' }
  // { ...state, isSignedIn: true } => { isSignedIn: true, otherKey: 'value' }

  const dispatch = useDispatch();

  function onAuthChange(signedIn) {
    //setSignedIn(auth.current.isSignedIn.get());

    if (signedIn) {
      dispatch(signIn());
    } else {
      dispatch(signOut());
    }
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

          // setSignedIn(auth.current.isSignedIn.get());
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
          //set auth accordingly to the status
        });
    });
  }, [onAuthChange]);

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
