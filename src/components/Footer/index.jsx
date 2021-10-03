import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-secondaryColor">
        <div className="container">
          <div className="d-flex justify-content-between text-white">
            <div className="d-flex text-white">
              <img src={logo} alt="logo" className="img-fluid" />
              <h1 className="px-3 d-flex align-items-center">
                ANON<span className="text-primaryColor">ymous</span>
              </h1>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between text-white pb-5">
            <h1 className="pt-4">Jump To</h1>
            <div className="d-flex justify-content-around pt-4">
              <div className="px-4 font-18">Featured</div>
              <div className="px-4 font-18">The ANONymous</div>
              <div className="px-4 font-18">Mint</div>
              <div className="px-4 font-18">Roadmap</div>
              <div className="px-4 font-18">Team</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-white">
        Copyright ANONymous. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
