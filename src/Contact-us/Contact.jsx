import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import salvahand from "../assets/hand.png";
import location from "../assets/location.svg";
import phoneicon from "../assets/phoneicon.svg";
import RS from "../assets/iconssvg.svg";
import emailicon from "../assets/email.svg";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kcuervm",
        "template_2i5sqhc",
        e.target,
        "_MmT6zw6L6VstUMkn"
      )
      .then(
        (result) => {
          alert("Your email has been sent!");
          e.target.empty();

          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="post">
      <h2 className="contact">Contact Us</h2>
      <div className="contactus">
        <div className="bigcontainer">
          <img src={salvahand} alt="salva hand" className="salvahand" />
        </div>
        <div className="container">
          <div className>
            <div></div>
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <h3>Get In touch</h3>
                <h6>We are here for you! How can we help you?</h6>
                <input
                  type="text"
                  name="user_name"
                  id="nameid"
                  placeholder="Name"
                  className="field"
                />

                <input
                  type="email"
                  name="user_email"
                  id="emailid"
                  placeholder="Email"
                />

                <textarea name="message" id="messageid" placeholder="Message" />
                <input
                  type="submit"
                  value="Send"
                  id="send-button"
                  className="buttonstyle"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="coordonnées">
          <div className="row1">
            <div>
              <img src={location} alt="location" className="location" />
            </div>
            <p>
              {" "}
              <div className="coordonnée">
                {" "}
                Avenue Nakhil, Rabat, Morocco
              </div>{" "}
            </p>
          </div>

          <div className="row1">
            <div>
              <img src={emailicon} alt="email" className="location" />
            </div>
            <p>
              {" "}
              <div className="coordonné11"> Salva@gmail.com</div>{" "}
            </p>
          </div>
          <div className="row11">
            <div>
              <img src={phoneicon} alt="phoneicon" className="location1" />
            </div>
            <p>
              {" "}
              <div className="coordonné16"> 0623567890</div>{" "}
            </p>
          </div>
          <div className="row15">
            <div></div>
            <div className="RS">
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaFacebookF className="Icon" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaTwitter className="Icon" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaLinkedinIn className="Icon" />
              </a>
              <a href="https://www.youtube.com/watch?v=gpqoZQ8GNK8&list=PLr6MAwqc56XkaCLacWWODhBx-sZE9W1ks&index=5&t=5940s">
                <FaInstagram className="Icon" />
              </a>{" "}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
