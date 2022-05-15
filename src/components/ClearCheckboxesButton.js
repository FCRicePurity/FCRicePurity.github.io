export default function ClearCheckboxesButton({ setNumChecked }) {
  const clearCheckboxes = () => {
    window.scrollTo(0, 0);
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
