import React, { useState, useEffect } from "react";
import Header from "./Components/Head/Header";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loadings, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loadings ? (
        <HashLoader
          color={"#36d7b7"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="Spinner">
          <Header />
          <Home />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
