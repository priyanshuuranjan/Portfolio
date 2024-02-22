import React, { useState } from "react";
import "./Header.css";
import logo from "../pic/logotra.png";


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);

  // Download cv using gopgale drive link...
  function handleDownloadClick() {
    const cvFileUrl =
      "https://drive.google.com/file/d/1I0r_XD9kDp38wRjt1Vj0J_mXCe7n58H4/view?usp=sharing";

    // Create a temporary link element to initiate the download
    const link = document.createElement("a");
    link.href = cvFileUrl;
    link.download = "Resume"; // You can set a custom filename for the downloaded file
    link.target = "_blank"; // This will open the link in a new tab/window to initiate the download
    link.click();
  }

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            {/* Navbar logo */}
            <img src={logo} alt=""  />
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
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
                <button className="home-btn" onClick={handleDownloadClick}>
                  Download CV
                </button>
              </li>
            </ul>
            
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
