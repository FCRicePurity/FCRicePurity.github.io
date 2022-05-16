export default function CalculateButton({ setNumChecked }) {
  const countChecks = () => {
    const checkboxes = document.querySelectorAll("input");
    let i = 100;
    for (let el of checkboxes) {
      if (el.checked) {
        i--;
      }
    }
    return i;
  };
  return (
    <button
      className="btn btn-secondary nav-btn"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#scoreModal"
      onClick={() => {
        setNumChecked(countChecks());
      }}
    >
      Calculate Score
    </button>
  );
}
