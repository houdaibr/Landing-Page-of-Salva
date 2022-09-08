import React from "react";
import logo from "../assets/Logo.svg";
import RSS from "../assets/resausocial.png";
import "./footer.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="positionn">
      <div className="main-content1">
        <div class="logotitle">
          <div className="first">
            <img src={logo} alt="logo" className="logo" />

            <h2>
              {" "}
              <div className="title6">SALVA</div>
            </h2>
          </div>
          <div>
            <p>
              <div className="content6">
                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                inde.
              </div>
            </p>
            <div className="RS1">
              {" "}
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaFacebookF className="Icon5" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaTwitter className="Icon5" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaLinkedinIn className="Icon5" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaInstagram className="Icon5" />
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <div className="contenta">
            <h2>
              <div className="title">Pages</div>
            </h2>
            <div className="place">
              <span class="text"> Home </span>
            </div>
            <div className="place">
              <span class="text"> Product </span>
            </div>
            <div className="place">
              <span class="text"> About </span>
            </div>
            <div className="place">
              <span class="text"> Contact </span>
            </div>
            <div className="place">
              <span class="text"> FAQ </span>
            </div>
          </div>
        </div>
        <div className="centerbox">
          <div className="contenta">
            <h2>
              <div className="title">Services</div>
            </h2>
            <div className="place">
              <span class="text"> Order the product </span>
            </div>
            <div className="place">
              <span class="text"> Buy your safety </span>
            </div>
            <div className="place">
              <span class="text"> leave a review </span>
            </div>
            <div className="place">
              <span class="text"> discover best beaches </span>
            </div>
          </div>
        </div>
        <div className="centerbox">
          <div className="contenta">
            <h2>
              <div className="title">Explore</div>
            </h2>
            <div className="place">
              <span class="text"> Community </span>
            </div>
            <div className="place">
              <span class="text"> Blogs </span>
            </div>
            <div className="place">
              <span class="text"> Experts </span>
            </div>
            <div className="place">
              <span class="text"> Partners </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
