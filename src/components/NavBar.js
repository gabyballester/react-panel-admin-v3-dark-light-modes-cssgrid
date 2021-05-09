import './NavBar.css';
import logo from '../assets/img/png/logo.png';
import tuat from '../assets/img/jpg/tuat.jpg';

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
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            <i className="fas fa-bell"></i>
            <span class="navbar-badge">15</span>
          </a>
          <ul className="dropdown-menu">
            <div class="dropdown-menu-header">
              <span>
                Notifications
						</span>
            </div>

            <div className="dropdown-menu-content">
              {/* dropdown items */}
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">

                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-gift"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>
                      15/07/2020
									</span>
                  </span>
                </a>
              </li>
              <li className="dropdown-menu-item">

                <a href="#" className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-tasks"></i>
                  </div>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    <span>15/07/2020</span>
                  </span>
                </a>
              </li>
              {/* fin dropdown items */}

            </div>
            <div class="dropdown-menu-footer">
              <span>
                Notifications
						</span>
            </div>
          </ul>
        </li>
        <li className="nav-item">
          <div className="avt">
            <img src={tuat} alt="User image" />
          </div>
        </li>
      </ul>
      {/* end nav left */}

    </div>
  )
}

export default NavBar;
