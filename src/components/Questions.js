import questionarray from "./questionarray";

export default function Questions({ setNumChecked }) {
  let message = (
    <ol className="list-group list-group-numbered">
      {questionarray.map((question, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-start align-items-start bg-transparent border-0 fs-6"
        >
          <label htmlFor={index}>
            <input
              type="checkbox"
              id={index}
              onChange={(e) => {
                const checked = e.target.checked;
                if (checked) {
                  setNumChecked((prevNum) => prevNum - 1);
                } else {
                  setNumChecked((prevNum) => prevNum + 1);
                }
              }}
            ></input>
            {question}
          </label>
        </li>
      ))}
    </ol>
  );
  return message;
}
