import React from "react";
import "./Home.css";
// import hero from "../pic/hero.png";
import hero1 from "../pic/hero1.jpg";
import skill1 from "../assets/asset 4.png";
import skill2 from "../assets/asset 5.png";
import skill3 from "../pic/skill3.png";
import skill4 from "../assets/asset 6.png";
import skill5 from "../assets/asset 7.png";
import skill6 from "../assets/asset 8.png";
import skill7 from "../assets/asset 9.png";
import skill8 from "../assets/asset 10.png";
import skill9 from "../assets/asset 11.png";
import skill10 from "../assets/asset 12.png";
import skill11 from "../assets/asset 13.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hii, I’m <span>Priyanshu Ranjan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Web Developer.", " Android Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I possess a passion for Full Stack development and a range of
              technical skills including expertise in the MERN stack, HTML, CSS,
              JavaScript, and React. My knowledge also extends to DBMS and
              Computer Networks. My creative and innovative personality, coupled
              with a strong passion for self-learning, makes me an asset to any
              project or team.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill4} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill5} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill6} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill7} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill8} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill9} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill10} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill11} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill4} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
