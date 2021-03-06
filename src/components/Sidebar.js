import './Sidebar.css'

const Sidebar = ({ showSidebar }) => {

  const sidebarContainer = `sidebar ${showSidebar ? 'expand' : ''}`;

  return (
    <div className={sidebarContainer}>
      <ul class="sidebar-nav">
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <span>
              Dashboard
					</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link active">
            <div>
              <i class="fab fa-accusoft"></i>
            </div>
            <span>Lorem</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-tasks"></i>
            </div>
            <span>Morbi</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-spinner"></i>
            </div>
            <span>Praesent</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-check-circle"></i>
            </div>
            <span>Pellentesque</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-bug"></i>
            </div>
            <span>Morbi</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-chart-line"></i>
            </div>
            <span>Praesent</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-book-open"></i>
            </div>
            <span>Pellentesque</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-adjust"></i>
            </div>
            <span>Morbi</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fab fa-algolia"></i>
            </div>
            <span>Praesent</span>
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link">
            <div>
              <i class="fas fa-audio-description"></i>
            </div>
            <span>Pellentesque</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
