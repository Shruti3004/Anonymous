import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";

const Join = () => {
  return (
    <div className="container py-section">
      <div className="join-card-background py-5 join-box">
        <h1 className="text-white text-center mb-5">
          Join the <span className="text-primaryColor">ANONymous</span>
        </h1>
        <div className="d-flex justify-content-between">
          <img src={logo} className="img-fluid" />
          <div className="join-card text-white py-3 px-4 h-100">
            <div className="font-25">PRICE PE ANONYMOUS</div>
            <div className="text-primaryColor font-25">
              0.08 <span className="text-white font-17">ETH Each</span>
            </div>
          </div>
        </div>
        <h1 className="text-white mt-4">Count your Counts</h1>
        <div className="text-tertiaryColor">
          Enter the amount of ANONymous You would like to purchase
        </div>
        <div className="join-price-card text-white py-3 px-5 mt-5">
          <div className="d-flex justify-content-between text-white">
            <h1>01</h1>
            <h3 className="text-tertiaryColor align-self-center d-flex">
              o Max
            </h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 text-white font-25">
            Total
            <div className="text-primaryColor">00 ETH</div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-12 d-flex align-self-center">
            <button className="w-100 sold-out-button text-center bg-primaryColor text-white py-2">Sold Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
