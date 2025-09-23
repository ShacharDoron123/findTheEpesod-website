import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <Link to="/">
        <button>HomePage</button>
      </Link>
      <hr />
    </div>
  );
}