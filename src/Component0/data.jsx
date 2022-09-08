import Engage1 from "../assets/Group1.svg";
import Engage2 from "../assets/Group2.svg";
import Engage3 from "../assets/Group3.svg";
import "./Product.css";
export const data = [
  {
    image: <img src={Engage1} className="animation1" alt="Engage1" />,
    titre: "1- swimming",
  },
  {
    image: <img src={Engage2} className="animation2" alt="Engage2" />,
    titre: "2- drowning",
  },
  {
    image: <img src={Engage3} className="animation3" alt="Engage3" />,
    titre: <div className="sending">3- sending data</div> ,
  },
];
