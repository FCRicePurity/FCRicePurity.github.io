import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import CalculateButton from "./components/CalculateButton";
import ScoreResult from "./components/ScoreResult";
import ClearCheckboxesButton from "./components/ClearCheckboxesButton";
import { useState } from "react";

function App() {
  const [numChecked, setNumChecked] = useState(100);
  return (
    <div>
      <Navbar setNumChecked={setNumChecked}></Navbar>
      <Intro></Intro>
      <ScoreResult numChecked={numChecked}></ScoreResult>
      <Questions setNumChecked={setNumChecked}></Questions>
      <div className="bottomButton">
        <ClearCheckboxesButton
          setNumChecked={setNumChecked}
        ></ClearCheckboxesButton>
        <CalculateButton></CalculateButton>
      </div>
    </div>
  );
}

export default App;
