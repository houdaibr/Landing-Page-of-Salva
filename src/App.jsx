import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Digit from "./Digit";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Digit />
    </div>
  );
}

export default App;
