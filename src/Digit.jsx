import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Pres } from "./Alpha/Pres";
import About from "./Component1/About";
import Product from "./Component0/Product";
import ContactUs from "./Contact-us/Contact";
import Footer from "./Footer/Footer";
import Plus from "./FAQ/Plus";
const Digit = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pres />
      <Product  />
      <About />
      <ContactUs />
      <Plus />
      

      <Footer />
    </BrowserRouter>
  );
};
export default Digit;
