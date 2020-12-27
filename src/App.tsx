import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
