import CalculateButton from "./CalculateButton";
import ClearCheckboxesButton from "./ClearCheckboxesButton";
export default function Navbar({ setNumChecked }) {
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

  const makeNavItems = () => {
    let navItems = new Array(navItemNames.length);
    for (let i = 0; i < navItems.length; i++) {
      navItems[i] = (
        <li className="nav-item" key={i}>
          <a
            className="nav-link"
            href={navItemLinks[i]}
            target="_blank"
            rel="noreferrer noopener"
          >
            {navItemNames[i]}
          </a>
        </li>
      );
    }
    return navItems;
  };

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
            id="logo"
            src="fc2.png"
            alt="LOGO"
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
          <ul className="navbar-nav me-auto">{makeNavItems()}</ul>
          <form className="d-flex">
            <ClearCheckboxesButton
              setNumChecked={setNumChecked}
            ></ClearCheckboxesButton>
            <CalculateButton setNumChecked={setNumChecked}></CalculateButton>
          </form>
        </div>
      </div>
    </nav>
  );
}
