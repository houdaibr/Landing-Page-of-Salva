import "./About.css";
import "@fontsource/poppins";
import { Link } from "react-router-dom";
import Eye from "../assets/eye.svg";
import Target from "../assets/target.svg";
import Slider from "./Component11/Slider";
import { Constant } from "./Constant";
import React, { useState } from "react";

const About = () => {
  const [donnée, setD] = useState(Constant);
  return (
    <div id="About" className="About10">
      <div className="Vector">
        <span className="About">About Us</span>
        <div className="Container">
          <div className="Content">
            <img className="image1" src={Target} alt="" />
            <span className="Titre12">Our Mission</span>
            <span className="Details">
            We integrate systems and technologies by our team of scientists and engineers , to save lives by using the bracelet in case of drowning. 


            </span>
          </div>
          <div className="Content">
            <img className="image" src={Eye} alt="" />
            <span className="Titre12">Our Vision</span>
            <span className="Details1">
            We aim to reduce drowning rates while providing adequate rescue methods.            
            </span>
          </div>
        </div>
      </div>
      <div className="Slider">
        <span className="Team">Meet The Team</span>
        <Slider />
        <span className="Team1">Our Partners</span>
        <div className="Datas">
          {donnée.map((elt, j) => {
            const { image, titre, clas } = elt;
            return (
              <div key={j} className="Data">
                {image}
                <span className={clas}>{titre}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
