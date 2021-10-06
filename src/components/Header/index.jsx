import React from "react";
import hero from "../../assets/hero.png";
import logo from "../../assets/logo.png";
import gallery from "../../assets/gallery.png";
import "./style.css";

const Header = () => {
  return (
    <div className="home-background">
      <div className="d-flex justify-content-between container">
        <img src={logo} alt="Anonymous" className="logo-image" />
        <div className="gallery-card text-white p-3 mt-4 h-100 text-left d-flex justify-content-between">
          <div>
            <div className="font-25 mobile-display-none">Gallery</div>
            <p className="text-tertiaryColor mobile-display-none font-frekle font-18">
              Explore the ANONymous
            </p>
          </div>
          <img
            src={gallery}
            alt="gallery-icon"
            className="pl-4"
            height="28px"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column d-md-none">
        <h1 className="text-white text-center main-heading">
          ANON<span className="text-primaryColor">ymous</span>
        </h1>
        <img src={hero} alt="" className="mt-3 px-5" height="300px" />
        <h4 className="text-center text-white mt-4">Roadmap</h4>
        <div className="font-17 text-tertiaryColor mb-2">Look into future</div>
      </div>
      <div className="container">
      <div className="row mobile-display-none" style={{ marginTop: "60vh" }}>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <i className="fa fa-twitter fa-3x text-primaryColor p-2 icons-background"></i>
          <div className="font-bold text-tertiaryColor font-25 mt-2">Twitter</div>
          <div className="font-frekle text-tertiaryColor font-20">Follow our twitter for sneak Peeks</div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="text-right">
          <i className="fab fa-discord fa-3x text-primaryColor p-2 icons-background"></i>
          <div className="font-bold text-tertiaryColor font-25 mt-2">Discord</div>
          <div className="font-frekle text-tertiaryColor font-20">Join the distord for Latest updates</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
