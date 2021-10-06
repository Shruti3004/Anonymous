import React from "react";
import leadershipOne from "../../assets/leadershipOne.png";
import leadershipTwo from "../../assets/leadershipTwo.png";
import leadershipThree from "../../assets/leadershipThree.png";
import "./style.css";

const Leadership = () => {
  return (
    <div className="py-section">
      <div className="container feature-background">
        <h1 className="text-center pt-5 leadership-block-padding text-white">
          Our <span className="text-primaryColor">Leadership</span>
        </h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center pb-5 leadership-images">
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center image-container">
            <img
              src={leadershipOne}
              alt="feature"
              className="img-fluid leadership-image"
            />
            <div className="image-content text-white py-2">
              <h3>Cristina M</h3>
              <div className="font-frekle font-18">The Artist</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center image-container">
            <img
              src={leadershipTwo}
              alt="feature"
              className="img-fluid leadership-image"
            />
            <div className="image-content text-white py-2">
              <h3>John D</h3>
              <div className="font-frekle font-18">The Artist</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 col-10 my-4 text-center image-container">
            <img
              src={leadershipThree}
              alt="feature"
              className="img-fluid leadership-image"
            />
            <div className="image-content text-white py-2">
              <h3>Alex P</h3>
              <div className="font-frekle font-18">The Artist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
