import React, { useState } from "react";
import "./Header.css";
// import logo from "../pic/logo192.png";
import logo from "../pic/logotra.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            {/* Navbar logo */}
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/* <ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'> */}
              <li>
                <a href="#home">home</a>
              </li>

              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn" >Download CV</button>
              </li>
            </ul>
            {/* <a href ={https://drive.google.com/file/d/1dh_cKbrBo_FBZpE9-gweLz3ZEDOX8AQY/view?usp=drivesdk } download>CV</a> */}
            {/* ye jb hm phn me on krenge tb ye close krne ka option aayega ish liye use kiye hai ishe hm  */}
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
