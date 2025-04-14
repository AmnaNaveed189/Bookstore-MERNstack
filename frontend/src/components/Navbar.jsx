import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Book Store
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/books/create" className="navbar-link">
            Create Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;