import CalculateButton from "./CalculateButton";
import ClearCheckboxesButton from "./ClearCheckboxesButton";
export default function Navbar({
  numChecked,
  setNumChecked,
  setFinalScore,
  scoreRef,
}) {
  const navItemLinks = [
    "https://www.instagram.com/foundationschoreo/",
    "https://www.facebook.com/FoundationsChoreo",
    "https://www.youtube.com/c/FoundationsChoreography",
    "https://lnk.bio/dxlo/",
    "https://github.com/FCRicePurity/FCRicePurity.github.io",
  ];
  const navItemNames = [
    "Instagram",
    "Facebook",
    "Youtube",
    "Useful Links",
    "Source Code",
  ];

  const makeNavItems = (link, index) => (
    <li className="nav-item">
      <a
        className="nav-link"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {navItemNames[index]}
      </a>
    </li>
  );

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
            {navItemLinks.map(makeNavItems)}
          </ul>
          <form className="d-flex">
            <ClearCheckboxesButton
              scoreRef={scoreRef}
              setNumChecked={setNumChecked}
            ></ClearCheckboxesButton>
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
