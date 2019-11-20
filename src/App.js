import React from "react";
import logo from "./logo.svg";
import "./App.css";

const ParentComponent = props => {
  return (
    <div>
      <div>This is parent component</div>
      <ChildComponent add={props.add} />
    </div>
  );
};

const ChildComponent = props => {
  props.add(1, 2);
  return <div>This is child component</div>;
};

function App() {
  const add = (a, b) => {
    const sum = a + b;
    console.log("Enterede here", sum);
    return sum;
  };
  return (
    <div className="App">
      Sample app
      <ParentComponent add={add} />
    </div>
  );
}

export default App;
