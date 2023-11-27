import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <a href="" className="navbar-brand">
          My Travel Blog
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="destinations" className="nav-link">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a href="projects" className="nav-link">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
