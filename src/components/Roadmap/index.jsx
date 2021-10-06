import React from "react";
import "./style.css";

const Roadmap = () => {
  return (
    <div className="py-section">
      <div className="container">
        <h1 className="text-white text-center">Roadmap</h1>
        <p className="text-tertiaryColor te font-bold font-19xt-center px-5 mt-4 font-18">
          Each ANONymous token allows the holder passage into the realms of, The
          Syndicate where no mortal has left alive. All ERC-721 Vampire tokens
          are stored on the Ethereum blockchain.
        </p>
      </div>
      <div className="roadmap-background">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 text-white py-3 px-lg-4 px-0 percent-text">
              10%
            </div>
            <div className="col-lg-3 col-md-9 col-sm-9 col-9 roadmap-cards text-white py-3 px-4">
              <strike className="font-25">Phase 1</strike>
              <br />
              <strike className="text-tertiaryColor font-bold font-19">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </strike>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12"></div>
          </div>
          <div className="row d-flex justify-content-center margin-cards-negative">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12"></div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 text-white py-3 px-lg-4 px-0 percent-text">
              75%
            </div>
            <div className="col-lg-3 col-md-9 col-sm-9 col-9 roadmap-cards text-white py-3 px-4">
              <strike className="font-25">Phase 2</strike>
              <p className="text-tertiaryColor font-bold font-19">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center margin-cards-negative">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12"></div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 text-white py-3 px-lg-4 px-0 percent-text">
              25%
            </div>
            <div className="col-lg-3 col-md-9 col-sm-9 col-9 roadmap-cards text-white py-3 px-4">
              <strike className="font-25">Phase 3</strike>
              <p className="text-tertiaryColor font-bold font-19">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12"></div>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12"></div>
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 text-primaryColor py-3 px-lg-4 px-0 percent-text">
              100%
            </div>
            <div className="col-lg-4 col-md-9 col-sm-9 col-9 roadmap-cards text-white py-3 px-4">
              <div className="font-25">ANONymous Live Forever</div>
              <p className="text-tertiaryColor font-bold font-19">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-3">
            <div className="col-lg-1 col-md-2 col-sm-2 col-2 text-white py-3 px-lg-4 px-0 percent-text">
              50%
            </div>
            <div className="col-lg-3 col-md-9 col-sm-9 col-9 roadmap-cards text-white py-3 px-4">
              <strike className="font-25">Phase 3</strike><br />
              <strike className="text-tertiaryColor font-bold font-19">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </strike>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
