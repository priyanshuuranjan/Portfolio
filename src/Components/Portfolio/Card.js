import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <h2>{props.des}</h2>
              <div className="button f_flex mtop">
                {props.link && (
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow btn-website"
                  >
                    View Website
                  </a>
                )}
                {props.github && (
                  <a
                    href={props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shadow btn-github"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <button
                className="close-modal btn_shadow"
                onClick={toggleModal}
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
