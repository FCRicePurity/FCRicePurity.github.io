export default function ClearCheckboxesButton({ setNumChecked, scoreRef }) {
  const clearCheckboxes = () => {
    scoreRef.current.scrollIntoView({ block: "center" });
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    setNumChecked(100);
  };

  return (
    <button
      className="btn btn-secondary nav-btn me-2"
      type="button"
      onClick={clearCheckboxes}
    >
      Clear Checkboxes
    </button>
  );
}
