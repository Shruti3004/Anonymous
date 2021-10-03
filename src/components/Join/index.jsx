import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";

const Join = () => {
  return (
    <div className="container py-section">
      <div className="join-card-background py-5">
        <h1 className="text-white text-center">
          Join the <span className="text-primaryColor">ANONymous</span>
        </h1>
        <div className="d-flex justify-content-between">
        <img src={logo} className="img-fluid" />

        </div>
      </div>
    </div>
  );
};

export default Join;
