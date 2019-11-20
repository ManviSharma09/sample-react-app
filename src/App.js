import React from "react";

import "./App.css";

function App() {
  const add = (a, b) => {
    const sum = a + b;
    console.log("Enterede here", sum);
    return sum;
  };
  return (
    <div className="App">
      Sample app
      <p>Sample text</p>
    </div>
  );
}

export default App;
