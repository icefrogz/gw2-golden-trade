import React from 'react'
import { useDispatch } from 'react-redux'
// import gw2trade from 'api/gw2trade';

const SignIn = () => {
  const dispatch = useDispatch()

  function logOut() {
    // gw2trade
    //   .delete("/auth/sign_out")
    //   .then((response) => {
    //     console.log(response);
    //     dispatch({ type: "SIGNED_OUT" });
    //   })
  }

  return (
    <button className='btn btn-danger' name='logout' onClick={logOut}>
      Sign Out
    </button>
  )
}

export default SignIn
