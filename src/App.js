import React from "react";
import "./App.css";
import Header from "./components/Header"
import Container from "./components/Container"

function App() {  
  return (
    <div className="App">
      <Header />
      <Container />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
