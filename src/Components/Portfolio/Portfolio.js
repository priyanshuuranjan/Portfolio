import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";
import Certificate_data from "./Certificate_data";

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            {/* <h4>Projects And Certificates</h4> */}
            <h1> Projects</h1>
          </div>

          <div className="content grid">
            {Portfolio_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  des={value.des}
                  title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h1>My Certificates</h1>
          </div>

          <div className="content grid">
            {Certificate_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  // title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
