import React, { useState } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // On clicking on Submit button in contect form these sms were display on home screen of users

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}.
  My phone number is ${data.phone}.
  My email address is ${data.email}.
  My Subject on  ${data.subject}.
  Here is my message I want to say : ${data.message}.
  `
    );
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p4gzc1d",
        "template_azsc74j",
        e.target,
        "P0PQD3FSgA4lSadwz"
      )
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            {/* <h4>CONTACT</h4> */}
            <h1 className="get"> Get In Touch</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" style={{ width: "100%" }} />
                </div>
                <div className="details">
                  <h1>Priyanshu Ranjan.</h1>
                  <p>An Aspiring Software Engineer</p>
                  <p>
                    I am available for part-time freelance work. Connect with me
                    via email and social networks.
                  </p>{" "}
                  <br />
                  <p>Phone: +91 6299908913</p>
                  <p>Email: priyanshumth0808@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a
                      href="https://github.com/priyanshuuranjan/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-github"></i>
                      </button>
                    </a>
                    <a
                      href="https://www.instagram.com/priyanshu_singh45/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-instagram"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/priyanshu-ranjan-741462201/"
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-linkedin"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /*rel="noopener" prevents the new page from being able to access the window.opener property and ensures it runs in a separate process.
rel="noreferrer" has the same effect but also prevents the Referer header from being sent to the new page.  */}
            {/* On submiting the contect form message were sent to the user email  */}

            <div className="right box_shodow" onSubmit={sendEmail}>
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
