import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
// import gw2trade from 'api/gw2trade';

import TopNav from './TopNav'
import Home from './Home'
import SignIn from './SignIn'
import Achievements from './Achievements'
import TradingPost from './TradingPost'

const App = () => {
  // useEffect(() => {
  //   gw2trade
  //     .get('/api/v1/profile')
  //     .then((response) => {
  //       console.log(response)
  //       // dispatch({ type: "SIGNED_IN" });
  //     })
  //     .catch((error) => {
  //       console.log(error.toJSON())
  //       // dispatch({
  //       //   type: "SIGNED_IN_FAILED",
  //       //   payload: { errors: error.response.data }
  //       // });
  //     })
  // }, [])

  return (
    <>
      <TopNav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/achievements'>
          <Achievements />
        </Route>
        <Route path='/trading-post'>
          <TradingPost />
        </Route>
      </Switch>
    </>
  )
}

export default App
