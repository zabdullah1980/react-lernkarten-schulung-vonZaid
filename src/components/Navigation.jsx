import { NavLink } from "react-router-dom";

function getNavLinkClass({ isActive }) {
  return isActive
    ? "nav-link nav-link-active"
    : "nav-link";
}

function Navigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={getNavLinkClass} end>
            Start
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/karten"
            className={getNavLinkClass}
          >
            Lernkarten
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projekt"
            className={getNavLinkClass}
          >
            Projekt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
