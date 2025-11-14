import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
          <i className="bi bi-check2-square"></i> VoteSmart
        </Link>
        <div className="ms-auto">
          <Link to="/login" className="btn btn-outline-primary me-2 px-4">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary px-4">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
