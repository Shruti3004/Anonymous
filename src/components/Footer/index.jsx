import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-secondaryColor">
        <div className="container">
          <div className="footer-components text-white pt-5 pb-4">
            <div className="d-flex text-white">
              <img src={logo} alt="logo" className="logo-image" />
              <h1 className="px-3 d-flex align-items-center">
                ANON<span className="text-primaryColor">ymous</span>
              </h1>
            </div>
            <div className="d-flex align-self-center">
              <i className="fa fa-twitter fa-3x text-primaryColor p-2 mx-3 icons-background"></i>
              <i className="fab fa-discord fa-3x text-primaryColor p-2 icons-background"></i>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between text-white pb-5">
            <h2 className="pt-4 d-flex align-self-center">Jump To</h2>
            <div className="footer-components pt-4 text-tertiaryColor">
              <div className="px-4 font-20 font-bold">Featured</div>
              <div className="px-4 font-20 font-bold">The ANONymous</div>
              <div className="px-4 font-20 font-bold">Mint</div>
              <div className="px-4 font-20 font-bold">Roadmap</div>
              <div className="px-4 font-20 font-bold">Team</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-tertiaryColor">
        Copyright ANONymous. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
