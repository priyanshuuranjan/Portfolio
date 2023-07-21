import React from "react";
import Header from "./Components/Head/Header";
import Home from "./Components/Hero/Home";
import Features from "./Components/Features/Features";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
     {/* Routing Part Done Here */}
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
