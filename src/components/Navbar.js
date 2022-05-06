import CalculateButton from "./CalculateButton";
import ClearCheckboxesButton from "./ClearCheckboxesButton";
export default function Navbar({ numChecked, setFinalScore, scoreRef }) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://www.instagram.com/foundationschoreo/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="fc2.png"
            alt=""
            width="25"
            heigh="25"
            className="d-inline-block align-text-top"
          ></img>
          Foundations Choreography
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/foundationschoreo/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/FoundationsChoreo"
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/c/FoundationsChoreography"
                target="_blank"
                rel="noreferrer noopener"
              >
                Youtube
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://lnk.bio/dxlo/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Useful Links
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/FCRicePurity/FCRicePurity.github.io"
                target="_blank"
                rel="noreferrer noopener"
              >
                Source Code
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <ClearCheckboxesButton scoreRef={scoreRef}></ClearCheckboxesButton>
            <CalculateButton
              numChecked={numChecked}
              setFinalScore={setFinalScore}
              scoreRef={scoreRef}
            ></CalculateButton>
          </form>
        </div>
      </div>
    </nav>
  );
}
