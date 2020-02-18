import React, { useEffect } from "react";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import { loginSuccess, signOutRequest } from "./actions/authActions";
import AppRoutes from "./routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(
          loginSuccess({
            userId: user.uid,
            photoUrl: user.photoURL,
            displayName: user.displayName
          })
        );
      } else if (!user) {
        dispatch(signOutRequest());
      }
    });
  });
  return <AppRoutes />;
};

export default App;
