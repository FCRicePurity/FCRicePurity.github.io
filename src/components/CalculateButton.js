export default function CalculateButton({
  numChecked,
  setFinalScore,
  scoreRef,
}) {
  const displayFinalScore = () => {
    setFinalScore(numChecked);
    scoreRef.current.scrollIntoView({ block: "center" });
  };

  return (
    <button
      className="btn btn-secondary nav-btn"
      type="button"
      onClick={displayFinalScore}
    >
      Calculate Score
    </button>
  );
}
