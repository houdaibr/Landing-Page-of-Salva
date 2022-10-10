import { React, useState, useEffect } from "react";
import Faq from "react-faq-component";
import "./FAQ.css";

function Plus() {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "Can I use the bracelet?",
        content: (
          <p>
            <div className="answers">
            first you need to wear the bracelet. Make sure it is secure. If you are in danger, trigger the button. This will first launch the buoy system embedded in the bracelet to keep you afloat. At the same time, the lifeguard and the automated board will both receives alerts with the user's location. 
The boat will automatically come to the user's location while the lifeguard can also come to the user's rescue.
            </div>
          </p>
        ),
      },

      {
        title: "Can reuse the bracelet?",
        content: (
          <p>
            <div className="answers">
              {" "}
              Salva Bracelet is 100% reusable. In case the system has been triggered. The user only needs to replace the co2 cylinder and it will be ready to use again.
            </div>
          </p>
        ),
      },
      {
        title: "what is the lifespan of the salva prduct?",
        content: (
          <p>
            <div className="answers">
            The Salva bracelet needs to be recharged every 4 weeks for optimum usage. The embedded LEDs show the percentage of the battery.
            </div>
          </p>
        ),
      },
      {
        title: " how long does the automated board take to arrive?",
        content: (
          <p>
            {" "}
            <div className="answers"> Depending on how far the person in danger, the maximum time needed for the automated board to arrive is estimated to be 5 minutes.</div>
          </p>
        ),
      },
      {
        title: "Can you swap out the bracelet band? ",
        content: (
          <p>
            <div className="answers">
              {" "}
              Yes , the bracelet can be made into an armband easily.            </div>
          </p>
        ),
      },
      {
        title: "Can left-handed users wear it?",
        content: (
          <p>
            <div className="answers">
              {" "}
              Yes our product can be used with both hands.       </div>
          </p>
        ),
      },
      {
        title: "Can this product be used to track the user's location? ",
        content: (
          <p>
            <div className="answers">
              {" "}
              With Salva we want to make sure parents not to worry about their children, they can be given access to locate their children to ensure they are safe.
   </div>
          </p>
        ),
      },
    ],
  };
  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 5000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);

  return (
    <div id="FAQ" className="ABC">
      <h2>
        {" "}
        <div className="section-title">Frequently Asked Question</div>
      </h2>

      <div className="faq-style-wrapper">
        <Faq data={data} getRowOptions={setRowsOption} />
      </div>
    </div>
  );
}

export default Plus;
