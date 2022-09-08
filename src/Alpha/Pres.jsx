import React from "react";
import bracelet from "../assets/bracelet.svg";
import bracelet1 from "../assets/Ellipse.svg";
import bracelet2 from "../assets/phone.svg";
import AppStore from "../assets/appstore.svg";
import PlayStore from "../assets/playstore.svg";
import "./Pres.css";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

export const Pres = () => {
  return (
    <div id="Home" className="Pres">
      <div className="ligne"></div>
      <img className="Alpha" src={bracelet} alt="logo" />
      <img className="Alpha1" src={bracelet1} alt="logo" />
      <img className="Alpha2" src={bracelet2} alt="logo" />

      <div className="Saviour">
        <span className="s1">Your Life</span>
        <span className="s2">saviour</span>
        <span className="s3">It takes only one tap, to save your life</span>
        <div className="Store">
          <div className="Store1">
            <img className="" src={AppStore} alt="logo" />
            <div>
              <span className="Doxnload">DOWNLOAD ON THE </span>
              <span className="AppStore">AppStore</span>
            </div>
          </div>
          <div className="Store1">
            <img className="" src={PlayStore} alt="logo" />
            <div>
              <span className="Doxnload">DOWNLOAD ON THE </span>
              <span className="AppStore">PlayStore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
