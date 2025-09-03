import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <nav>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <Link to="/host">Host</Link>
        <Link to="/vans">Vans</Link>

        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
