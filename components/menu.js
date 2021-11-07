import Link from 'next/link';

export default function Menu() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <Link href="/">
          <a className="navbar-brand">Hagtag</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link href="/">
                <a className="nav-link">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/notes">
                <a className="nav-link">Notes</a>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <a className="nav-link">Settings</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
