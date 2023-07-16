import React from "react";
import Header from "./Componentss/Head/Header";
import Home from "./Componentss/Hero/Home";
import Features from "./Componentss/Features/Features";
import Portfolio from "./Componentss/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";

import Contact from "./Components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />

      <Contact />
    </>
  );
}

export default App;
