import React, { useEffect } from "react";
import AppRoutes from "./routes";
import * as firebase from "firebase";
import firebaseConfig from "./components/Firebase";

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
  return <AppRoutes />;
};

export default App;
