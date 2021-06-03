import React from "react";

const Card = ({ image, title, description, git, link }) => {
  return (
    <div className="card">
      <div className="box">
        <div className="imgBx">
          <img src={image} alt="goodtimes" />
        </div>
        <div className="contentBx">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <h2>
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <i class="fas fa-link"></i>
                </a>
              )}
              <a href={git} target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
