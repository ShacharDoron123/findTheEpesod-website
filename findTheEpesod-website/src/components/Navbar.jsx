import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Home
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) => `nav-link toBeAdded ${isActive ? "active" : ""}`}>
        Movies
      </NavLink>
      <NavLink to="/series" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        Series
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
        About
      </NavLink>
    </nav>
  );
}
