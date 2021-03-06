export default function ScoreResult({ numChecked }) {
  function roast(num) {
    if (num === 100) {
      return "Haven't touched a team yet";
    }
    if (num > 85) {
      return "Foundations virgin";
    }
    if (num > 70) {
      return "You've been on a team or two";
    }
    if (num > 50) {
      return "You live for Foundations";
    }
    if (num > 25) {
      return "Is getting this spicy allowed?";
    }
    return "Official Foundations whore";
  }

  return (
    <div
      className="modal fade"
      id="scoreModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-0">
            <img
              id="logoModal"
              src="fc2.png"
              alt="LOGO"
              className="d-inline-block align-text-top"
            ></img>
            <h1 className="modal-title" id="score">
              Score: {numChecked}
            </h1>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn-close btn-close-white align-self-start ms-0 mt-n1 me-n1"
            ></button>
          </div>
          <div className="modal-body text-center pt-0">
            <h1>{roast(numChecked)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
