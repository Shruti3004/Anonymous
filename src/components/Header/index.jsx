import React from "react";
import hero from "../../assets/hero.png";
import logo from "../../assets/logo.png";
import car from "../../assets/car.png";
import gallery from "../../assets/gallery.png";
import "./style.css";

const Header = () => {
  return (
    <div className="home-background">
      <div className="d-flex justify-content-between container">
        <img src={logo} alt="" className="img-fluid" />
        <div className="gallery-card text-white p-3 mt-4 h-100 text-left d-flex justify-content-between">
          <div>
            <div className="font-25">Gallery</div>
            <p className="text-tertiaryColor">Explore the ANONymous</p>
          </div>
          <img src={gallery} alt="" className="pl-4" height="28px" />
        </div>
      </div>
      {/* <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white text-center main-heading">
          ANON<span className="text-primaryColor">ymous</span>
        </h1>
        <img src={hero} alt="" className="mt-4 px-5" height="350px" />
        <div className="d-flex justify-content-between">
          <div className="gallery-card text-white p-3 mt-4 h-100 text-left d-flex justify-content-between">
            <div>
              <div className="font-25">Gallery</div>
              <p className="text-tertiaryColor">Explore the ANONymous</p>
            </div>
            <img src={gallery} alt="" className="pl-4" height="28px" />
          </div>
          <img src={car} alt="" className="img-fluid mt-4" />
          <div className="gallery-card text-white p-3 mt-4 h-100 text-left d-flex justify-content-between">
            <div>
              <div className="font-25">Gallery</div>
              <p className="text-tertiaryColor">Explore the ANONymous</p>
            </div>
            <img src={gallery} alt="" className="pl-4" height="28px" />
          </div>
        </div>
      </div>
    */}
    </div>
  );
};

export default Header;
