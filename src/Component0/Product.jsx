import React, { useState } from "react";
import "./Product.css";
import { data } from "./data.jsx";
import security from "../assets/security-svg.svg";
import rapidity from "../assets/rapiditysvg.svg";
import performance from "../assets/performance.svg";

const Product = () => {
  const [donnée, setD] = useState(data);
  return (
    <div id="Product" className="Amine">
      <div className="Engagement">
        <div className="Header2">
          <span>The Product</span>
        </div>
        <div className="Comps">
          <span className="Textes">
            life is precious, saving it is our duty. Our bracelet is a good tool
            to prevent drowning in no time, all you have to do is press the
            button.
          </span>
        </div>
        <div className="DATAS">
          {donnée.map((item, i) => {
            const { image, titre, details } = item;
            {
              return (
                <div key={i} className="DATA">
                  {image}
                  <span>{titre}</span>
                </div>
              );
            }
          })}
        </div>
        <div className="Past">
          <div className="principales">
            <spam>Salva is underpinned by 3 key principles : </spam>
          </div>
          <div className="grid-container">
            <div className=" griditem-1">
              <img className="security" src={security} alt="security" />
            </div>
            <div className="grid-item-2">
              <h2>
                <div className="titlesec">Security</div>
              </h2>
            </div>
            <div className=" griditem-3"></div>
            <div className="grid-item grid item-4">
              <p>
                <div className="parasec">
                  Salva saves you from drowning, just click a button on the
                  bracelet and a buoy will be trigged to help you float above
                  the water.{" "}
                </div>
              </p>
            </div>
          </div>
          <div className="grid-container1">
            <div className=" griditem-1">
              <img className="security" src={rapidity} alt="security" />
            </div>
            <div className="grid-item-2">
              <h2>
                <div className="titlesec">Rapidity</div>
              </h2>
            </div>
            <div className=" griditem-3"></div>
            <div className="grid-item grid item-4">
              <p>
                <div className="parasec">
                  When you are in danger, both the lifeguard and an autonomous
                  board will be notified about your current location so they can
                  come and get you in a jiffy.{" "}
                </div>
              </p>
            </div>
          </div>

          <div className="grid-container1">
            <div className=" griditem-1">
              <img className="security" src={performance} alt="security" />
            </div>
            <div className="grid-item-2">
              <h2>
                <div className="titlesec">Performance</div>
              </h2>
            </div>
            <div className=" griditem-3"></div>
            <div className="grid-item grid item-4">
              <p>
                <div className="parasec1">
                The bracelet is portable and easy to use, the airbag can be pumped in 1 second. It design makes it much less bulky than a life jacket.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
