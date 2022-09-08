import { React, useState, useEffect } from "react";
import Faq from "react-faq-component";
import "./FAQ.css";

function Plus() {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: (
          <p>
            <div className="answers">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
              tempor sem. Aenean vel turpis feugiat, ultricies metus at,
              consequat velit. Curabitur est nibh, varius in tellus nec, mattis
              pulvinar metus.
            </div>
          </p>
        ),
      },

      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: (
          <p>
            <div className="answers">
              {" "}
              Nunc maximus, magna at ultricies elementum, risus turpis vulputate
              quam, vitae convallis ex tortor sed dolor.
            </div>
          </p>
        ),
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: (
          <p>
            <div className="answers">
              Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus
              nunc, ac sagittis leo elit vel lorem. Fusce tempor lacus ut libero
              posuere viverra. Nunc velit dolor, tincidunt at varius vel,
              laoreet vel quam.
            </div>
          </p>
        ),
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: (
          <p>
            {" "}
            <div className="answers"> current version is 1.2.1</div>
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
