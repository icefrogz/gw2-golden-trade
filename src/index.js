import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// ini aku add logger, jadi pas kamu cek console kamu keliatan current state
// sama tiap action nanti rubah apa aja :)
// Logger with default options
import logger from "redux-logger";

import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
