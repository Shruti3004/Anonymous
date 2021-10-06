import React from "react";
import "./style.css";
import featureOne from "../../assets/featureOne.png";
import featureTwo from "../../assets/featureTwo.png";
import featureThree from "../../assets/featureThree.png";

const Features = () => {
  return (
    <>
      <div className="container my-5 feature-background">
        <h1 className="text-center pt-5 featured-block-padding text-white">
          Featured <span className="text-primaryColor">ANONymous</span>
        </h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center pb-5 feature-images">
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center">
            <img
              src={featureOne}
              alt="feature"
              className="img-fluid feature-image"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center">
            <img
              src={featureTwo}
              alt="feature"
              className="img-fluid feature-image"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center">
            <img
              src={featureThree}
              alt="feature"
              className="img-fluid feature-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
