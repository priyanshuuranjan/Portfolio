import React from "react";
import Header from "./Components/Head/Header";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      {/* Routing Part Done Here */}
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
