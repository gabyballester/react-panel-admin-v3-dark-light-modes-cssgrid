import { useState } from 'react';

import logo from '../assets/img/png/logo.png';
import tuat from '../assets/img/jpg/tuat.jpg';

import './NavBar.css';

const NavBar = ({ showSidebar, setShowSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const openNotifications = () => {
    if (showNotifications) {
      setShowNotifications(false);
    } else {
      setShowNotifications(true);
      setShowSettings(false);
    }
  }

  const dropdownNotification = `dropdown-menu ${showNotifications ? 'dropdown-expand' : ''}`

  const openSettings = () => {
    if (showSettings) {
      setShowSettings(false);
    } else {
      setShowNotifications(false);
      setShowSettings(true);
    }
  }

  const dropdownSettings = `dropdown-menu ${showSettings ? 'dropdown-expand' : ''}`

  return (

    // nav left
    <div className="navbar">
      <ul className="navbar-nav nav-left">
        <li className="nav-item"
          onClick={toggleSidebar}
        >
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
        <li
          className="nav-item dropdown"
          onClick={openNotifications}
        >
          <a href="#" className="nav-link">
            <i className="fas fa-bell" data-toggle="notification-menu"></i>
            <span class="navbar-badge">15</span>
          </a>
          <ul id="notification-menu"
            className={dropdownNotification}>
            <div class="dropdown-menu-header">
              <span>
                Notifications
						</span>
            </div>

            <div className="dropdown-menu-content overlay-scrollbar">
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
                View all notifications
						  </span>
            </div>
          </ul>
        </li>
        <li
          className="nav-item avt-wrapper"
          onClick={openSettings}
        >
          <div className="avt dropdown">
            <img src={tuat} alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
            <ul id="user-menu" className={dropdownSettings}>
              <li className="dropdown-menu-item">
                <a className="dropdown-menu-link">
                  <div>
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <span>Profile</span>
                </a>
              </li>
              <li class="dropdown-menu-item">
                <a href="#" class="dropdown-menu-link">
                  <div>
                    <i class="fas fa-cog"></i>
                  </div>
                  <span>Settings</span>
                </a>
              </li>
              <li class="dropdown-menu-item">
                <a href="#" class="dropdown-menu-link">
                  <div>
                    <i class="far fa-credit-card"></i>
                  </div>
                  <span>Payments</span>
                </a>
              </li>
              <li class="dropdown-menu-item">
                <a href="#" class="dropdown-menu-link">
                  <div>
                    <i class="fas fa-spinner"></i>
                  </div>
                  <span>Projects</span>
                </a>
              </li>
              <li class="dropdown-menu-item">
                <a href="#" class="dropdown-menu-link">
                  <div>
                    <i class="fas fa-sign-out-alt"></i>
                  </div>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* end nav left */}

    </div>
  )
}

export default NavBar;
