import Image from 'next/image';
import Link from 'next/link';

import Profile from './widgets/Profile';

import logo from '../public/images/hagtaglogo.png';

export default function Menu() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <Image src={logo} alt="HagTag logo" width="30" height="30" />
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
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Profile />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
