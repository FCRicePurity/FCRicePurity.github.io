export default function CalculateButton({
  numChecked,
  setFinalScore,
  scoreRef,
}) {
  return (
    <button
      className="btn btn-secondary nav-btn"
      type="button"
      onClick={() => {
        setFinalScore(numChecked);
        scoreRef.current.scrollIntoView({ block: "center" });
      }}
    >
      Calculate Score
    </button>
  );
}
