import React from "react";
import logo from "./logo.svg";
import "./App.css";

const ParentComponent = () => {
  return (
    <div>
      <div>This is parent component</div>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  return <div>This is child component</div>;
};

function App() {
  return (
    <div className="App">
      Sample app
      <ParentComponent />
    </div>
  );
}

export default App;
