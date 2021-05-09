import './NavBar.css';
import logo from '../assets/img/png/logo.png';

const NavBar = () => {
  return (

    // nav left
    <div className="navbar">
      <ul className="navbar-nav nav-left">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item logo-container">
				<img className="nav-logo" src={logo} />
        </li>
      </ul>
      {/* end nav left */}

      {/* form */}
      <form className="navbar-search">
        <input type="text" name="Search" className="navbar-search-input" placeholder="What you looking for..." />
        <i class="fas fa-search"></i>
      </form>
      {/* end form */}

      {/* nav left */}
      <ul className="navbar-nav nav-right">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>
      {/* end nav left */}

    </div>
  )
}

export default NavBar;
