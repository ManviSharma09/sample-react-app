import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import "./index.css";

import App from "./App";

import store from "./store";
import history from "./store/history";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import firebaseConfig from "./components/Firebase/index";
import { ConnectedRouter } from "connected-react-router";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        getState={state => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
