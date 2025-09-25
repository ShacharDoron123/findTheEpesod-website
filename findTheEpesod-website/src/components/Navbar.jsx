import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/movies" className="nav-link">Movies</Link>
      <Link to="/series" className="nav-link">Series</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}
