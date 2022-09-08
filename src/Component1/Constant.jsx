import { SiApple, SiAngular, SiCanva, SiGoogleanalytics } from "react-icons/si";
import orange from "../assets/orangelogo.png";
import CICR from "../assets/cicrlogo.png";
import CroixRouge from "../assets/croixrougelogo-removebg-preview.png";
import FRMN from "../assets/FRMNlogo-removebg-preview.png";

export const Constant = [
  {
    image: <img className="Orange" src={orange} alt="orange" />,
    titre:<div className="orange">Orange</div>,
    clas: "class",
  },
  {
    image:<img className="Sisr" src={CICR} alt="cicr" />,
    titre:<div className="sisr"> Comité international de la Croix-Rouge</div> ,
    clas: "class1",
  },
  {
    image:<img className="CroixRouge" src={CroixRouge} alt="croixrouge" />,
    titre: <div className="croixRouge"> Croix Rouge</div>,
    clas: "class2",
  },
  {
    image:<img className="Frmn" src={FRMN} alt="frmn" />,
    titre: <div className="frmn">Fédération Royale Marocaine de Natation</div>,
    
    clas: "class3",
  },
];
