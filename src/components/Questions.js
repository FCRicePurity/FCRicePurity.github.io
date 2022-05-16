import questionarray from "./questionarray";

export default function Questions() {
  const olClasses = "list-group list-group-numbered";
  const liClasses =
    "list-group-item d-flex justify-content-start align-items-start bg-transparent border-0 fs-6";

  const message = (
    <ol className={olClasses}>
      {questionarray.map((question, index) => (
        <li key={index} className={liClasses}>
          <label htmlFor={index}>
            <input type="checkbox" id={index}></input>
            {question}
          </label>
        </li>
      ))}
    </ol>
  );

  return message;
}
