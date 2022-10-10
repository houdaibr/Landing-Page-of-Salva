import { SiApple, SiAngular, SiCanva, SiGoogleanalytics } from "react-icons/si";
import orange from "../assets/orangelogo.png";
import CICR from "../assets/cicrlogo.png";
import CroixRouge from "../assets/croixrougelogo-removebg-preview.png";
import FRMN from "../assets/FRMNlogo-removebg-preview.png";

export const Constant = [
  {
    image: <img className="Orange" src={orange} alt="orange" />,
    titre:<a href="https://www.orange.com/fr" className="orange">Orange</a>,
    clas: "class",
  },
  {
    image:<img className="Sisr" src={CICR} alt="cicr" />,
    titre:<a href="https://www.icrc.org/fr" className="sisr"> Comité international de la Croix-Rouge</a> ,
    clas: "class1",
  },
  {
    image:<img className="CroixRouge" src={CroixRouge} alt="croixrouge" />,
    titre: <a href= "https://www.icrc.org/fr/ou-nous-intervenons/africa/maroc" className="croixRouge"> Croix Rouge</a>,
    clas: "class2",
  },
  {
    image:<img className="Frmn" src={FRMN} alt="frmn" />,
    titre: <a href="https://frmnatation.com/" className="frmn">Fédération Royale Marocaine de Natation</a>,
    
    clas: "class3",
  },
];
