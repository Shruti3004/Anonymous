import React from "react";
import star from "../../assets/star.png";
import mask from "../../assets/mask.png";
import "./style.css";

const Body = () => {
  return (
    <div className="container py-section">
      <div className="d-flex justify-content-between">
        <h1 className="text-white mt-lg-5">
          The <span className="text-primaryColor">ANONymous</span><br />Body is
          populated by
        </h1>
        <div className="join-text text-primaryColor d-flex align-self-center pl-4">
          1002
        </div>
      </div>
      <ul className="text-tertiaryColor mt-4 font-25 font-frekle">
        <li>
          Unique ANONymous Unique ANONymous Living Eternally on the blockchain
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quasi consectetur dolores.
        </li>
      </ul>
      <div className="row d-flex justify-content-center pt-4">
        <div className="col-lg-6 col-md-12 col-sm-11 col-11 mt-4">
          <div className="join-card-background">
            <img
              src={star}
              alt=""
              className="img-fluid px-lg-5 px-4 pt-5 pb-3"
            />
            <h2 className="text-white px-lg-5 px-4">Fully Individual</h2>
            <p className="text-tertiaryColor px-lg-5 px-4 pb-5 pt-3 font-frekle font-18">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-11 col-11 mt-4">
          <div className="join-card-background">
            <img
              src={mask}
              alt=""
              className="img-fluid px-lg-5 px-4 pt-5 pb-3"
            />
            <h2 className="text-white px-lg-5 px-4">ANONymous Secrets</h2>
            <p className="text-tertiaryColor px-lg-5 px-4 pb-5 pt-3 font-frekle font-18">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
