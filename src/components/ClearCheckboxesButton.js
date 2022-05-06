export default function ClearCheckboxesButton({ scoreRef }) {
  return (
    <button
      className="btn btn-secondary nav-btn me-2"
      type="button"
      onClick={() => {
        scoreRef.current.scrollIntoView({ block: "center" });
        document
          .querySelectorAll("input[type=checkbox]")
          .forEach((el) => (el.checked = false));
      }}
    >
      Clear Checkboxes
    </button>
  );
}
