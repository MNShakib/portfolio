import React from "react";

const Card = ({ image, title, description }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
