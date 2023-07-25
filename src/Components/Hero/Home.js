import React from "react";
import "./Home.css";
import hero1 from "../pic/hero1.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const skills = [
    { id: "html", img: "./assets/asset 5.png" },
    { id: "css", img: "./assets/asset 6.png" },
    { id: "js", img: "./assets/asset 7.png" },
    { id: "React", img: "./assets/asset 3.png" },
    { id: "material ui", img: "./assets/asset 8.png" },
    { id: "mongoDb", img: "./assets/asset 9.png" },
    { id: "jQuery", img: "./assets/asset 10.png" },
    { id: "java", img: "./assets/asset 11.png" },
    { id: "C++", img: "./assets/asset 12.png" },
    { id: "C", img: "./assets/asset 13.png" },
    { id: "", img: "./assets/asset 14.png" },
    { id: "Netlify", img: "./assets/asset 15.png" },
    { id: "Git VCS", img: "./assets/asset 16.png" },
    { id: "Figma", img: "./assets/asset 17.png" },
    { id: "Github", img: "./assets/asset 18.png" },
    { id: "Team Work", img: "./assets/asset 19.png" },
  ];
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            
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
                <h4>BEST SKILL ON</h4>
                <div className="btn_skills">
                  {skills.map((skill) => (
                    <img
                      src={skill.img}
                      alt={skill.id}
                      key={skill.id}
                      style={{ margin: "20px", padding: "8px" }}
                    />
                  ))}
                </div>
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
