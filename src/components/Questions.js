import { useEffect } from "react";
import questionarray from "./questionarray";

export default function Questions() {
  // const handleScoreUpdate = (e) => {
  //   const checked = e.target.checked;
  //   if (checked) {
  //     setNumChecked((prevNum) => prevNum - 1);
  //   } else {
  //     setNumChecked((prevNum) => prevNum + 1);
  //   }
  // };
  const olClasses = "list-group list-group-numbered";
  const liClasses =
    "list-group-item d-flex justify-content-start align-items-start bg-transparent border-0 fs-6";
  // useEffect(() => {
  //   console.log("MOUNTING QUESTIONS");
  // });
  const message = (
    <ol className={olClasses}>
      {questionarray.map((question, index) => (
        <li key={index} className={liClasses}>
          <label htmlFor={index}>
            <input
              type="checkbox"
              id={index}
              // onChange={handleScoreUpdate}
            ></input>
            {question}
          </label>
        </li>
      ))}
    </ol>
  );

  return message;
}
