import React from "react";
import "./Home.css";
import hero1 from "../pic/hero1.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const skills = [
    { id: 1, img: "./assets/asset 5.png" },
    { id: 2, img: "./assets/asset 6.png" },
    { id: 3, img: "./assets/asset 7.png" },
    { id: 4, img: "./assets/asset 8.png" },
    { id: 5, img: "./assets/asset 9.png" },
    { id: 6, img: "./assets/asset 10.png" },
    { id: 7, img: "./assets/asset 11.png" },
    { id: 8, img: "./assets/asset 12.png" },
    { id: 9, img: "./assets/asset 13.png" },
    { id: 10, img: "./assets/asset 14.png" },
    { id: 10, img: "./assets/asset 15.png" },
    { id: 10, img: "./assets/asset 16.png" },
    { id: 10, img: "./assets/asset 17.png" },
    { id: 10, img: "./assets/asset 18.png" },
    { id: 10, img: "./assets/asset 19.png" },
  ];
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
                  words={[
                    " Professional Coder.",
                    " Web Developer.",
                    " Android Developer.",
                  ]}
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
                  {skills.map((skill) => (
                    <img
                      src={skill.img}
                      alt={`skill-${skill.id}`}
                      key={skill.id}
                      style={{ margin: "10px" }}
                    />
                  ))}
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
