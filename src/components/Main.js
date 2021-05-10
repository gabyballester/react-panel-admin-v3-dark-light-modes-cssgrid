import './Main.css';

const Main = ({ showSidebar }) => {

  const sidebarContainer = `wrapper ${showSidebar ? 'expand' : ''}`;

  return (
    <div className={sidebarContainer}>
      <div className="row">
        <div className="col">
          <div className="counter bg-primary">
            <p>
              <i class="fas fa-tasks"></i>
            </p>
            <h3>100+</h3>
            <p>To do</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-warning">
            <p>
              <i class="fas fa-spinner"></i>
            </p>
            <h3>100+</h3>
            <p>In progress</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-success">
            <p>
              <i class="fas fa-check-circle"></i>
            </p>
            <h3>100+</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-danger">
            <p>
              <i class="fas fa-bug"></i>
            </p>
            <h3>100+</h3>
            <p>Issues</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
