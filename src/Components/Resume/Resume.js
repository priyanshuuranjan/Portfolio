// modified code 
import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="Resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
          <h4>FIRST-HAND EXPERIENCE</h4>
          <h1>My Resume</h1>
        </div>

        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading">
              <h4 className="year">2017-Present</h4>
              <h1 className="years">Education Quality</h1>
            </div>

            <div className="content">
              {ResumeApi.map((val, id) => {
                if (val.category === "education") {
                  return (
                    <Card
                      key={id}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className="left">
            <div className="heading">
              <h4 className="year">2020-Present</h4>
              <h1 className="project">Projects</h1>
            </div>

            <div className="content">
              {ResumeApi.map((val, index) => {
                if (val.category === "experience") {
                  return (
                    <Card
                      key={index}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;









// import React from "react";
// import "./Resume.css";
// import ResumeApi from "./ResumeApi";
// import Card from "./Card";

// const Resume = () => {
//   return (
//     <>
//       <section className="Resume" id="resume">
//         <div className="container top">
//           <div className="heading text-center">
//             <h4> FIRST HAND EXPERIENCE</h4>
//             <h1>My Resume</h1>
//           </div>

//           <div className="content-section mtop d_flex">
//             <div className="left">
//               <div className="heading">
//                 <h4>2017-Present</h4>
//                 <h1>Education Quality</h1>
//               </div>

//               <div className="content">
//                 {ResumeApi.map((val, id) => {
//                   if (val.category === "education") {
//                     return (
//                       <Card
//                         key={id}
//                         title={val.title}
//                         year={val.year}
//                         // rate={val.rate}
//                         desc={val.desc}
//                       />
//                     );
//                   }
//                 })}
//               </div>
//             </div>
//             <div className="left">
//               <div className="heading">
//                 <h4>2020-Present</h4>
//                 <h1>Pojects</h1>
//               </div>

//               <div className="content">
//                 {ResumeApi.map((val, index) => {
//                   if (val.category === "experience") {
//                     return (
//                       <Card
//                         key={index}
//                         title={val.title}
//                         year={val.year}
//                         // rate={val.rate}
//                         desc={val.desc}
//                       />
//                     );
//                   }
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Resume;
