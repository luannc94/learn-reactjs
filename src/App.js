import React from "react";
import "./App.css";
import ShowAnimal from "./features/Todo/pages";
import logo from "./logo.svg";
// import ShowAnimal from "./features/Todo/pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Render ShowAnimal */}
        <ShowAnimal />

        {/* Render Albums Music */}
        {/* <RenderAlbum /> */}

        {/* Render button color */}
        {/* <ColorBox /> */}

        {/* Render button count */}
        {/* <Count /> */}
      </header>
    </div>
  );
}

export default App;
