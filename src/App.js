import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import CalculateButton from "./components/CalculateButton";
import { useState, useRef } from "react";
function App() {
  const [numChecked, setNumChecked] = useState(100);
  const [finalScore, setFinalScore] = useState(null);
  const scoreRef = useRef(null);
  return (
    <div>
      <Navbar
        numChecked={numChecked}
        setFinalScore={setFinalScore}
        scoreRef={scoreRef}
      ></Navbar>
      <Intro finalScore={finalScore} scoreRef={scoreRef}></Intro>
      <Questions setNumChecked={setNumChecked}></Questions>
      <div className="bottomButton">
        <CalculateButton
          numChecked={numChecked}
          setFinalScore={setFinalScore}
          scoreRef={scoreRef}
        ></CalculateButton>
      </div>
    </div>
  );
}

export default App;
