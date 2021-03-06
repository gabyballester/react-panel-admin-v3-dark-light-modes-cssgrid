import { useRef } from 'react';

import Chart from './Chart';

import './Main.css';

const Main = ({ showSidebar }) => {
  const chartRef = useRef(null);
  const sidebarContainer = `wrapper ${showSidebar ? 'expand' : ''}`;

  return (
    <div className={sidebarContainer}>
      <div className="row-header">
        <div className="col">
          <div className="counter bg-primary">
            <p>
              <i className="fas fa-tasks"></i>
            </p>
            <h3>100+</h3>
            <p>To do</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-warning">
            <p>
              <i className="fas fa-spinner"></i>
            </p>
            <h3>100+</h3>
            <p>In progress</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-success">
            <p>
              <i className="fas fa-check-circle"></i>
            </p>
            <h3>100+</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="col">
          <div className="counter bg-danger">
            <p>
              <i className="fas fa-bug"></i>
            </p>
            <h3>100+</h3>
            <p>Issues</p>
          </div>
        </div>
      </div>
      <div className="row-table-data">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h3>Table</h3>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="card-content">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Manager</th>
                    <th>Status</th>
                    <th>Due date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>React</td>
                    <td>Tran Anh Tuat</td>
                    <td>
                      <span className="dot">
                        <i className="bg-success"></i>
											Completed
										</span>
                    </td>
                    <td>17/07/2020</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Vue</td>
                    <td>Bui Nhu Sang</td>
                    <td>
                      <span className="dot">
                        <i className="bg-warning"></i>
											In progress
										</span>
                    </td>
                    <td>18/07/2020</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Laravel</td>
                    <td>Phan Nhat Truong</td>
                    <td>
                      <span className="dot">
                        <i className="bg-warning"></i>
											In progress
										</span>
                    </td>
                    <td>17/07/2020</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Django</td>
                    <td>Le Anh Tuan</td>
                    <td>
                      <span className="dot">
                        <i className="bg-danger"></i>
											Delayed
										</span>
                    </td>
                    <td>07/07/2020</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MEAN</td>
                    <td>John Evan</td>
                    <td>
                      <span className="dot">
                        <i className="bg-primary"></i>
											Pending
										</span>
                    </td>
                    <td>20/08/2020</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>MERN</td>
                    <td>Robert</td>
                    <td>
                      <span className="dot">
                        <i className="bg-primary"></i>
											Pending
										</span>
                    </td>
                    <td>20/08/2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Progress bar</h3>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div class="card-content">
            <div class="progress-wrapper">
              <p>
                Less than 1 hour
								<span class="float-right">50%</span>
              </p>
              <div class="progress">
                <div class="bg-success" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div class="progress-wrapper">
              <p>
                1 - 3 hours
								<span class="float-right">60%</span>
              </p>
              <div class="progress">
                <div class="bg-primary" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div class="progress-wrapper">
              <p>
                More than 3 hours
								<span class="float-right">40%</span>
              </p>
              <div class="progress">
                <div class="bg-warning" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div class="progress-wrapper">
              <p>
                More than 6 hours
								<span class="float-right">20%</span>
              </p>
              <div class="progress">
                <div class="bg-danger" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-chart">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h3>ChartJS</h3>
            </div>
            <div ref={chartRef} className="card-content-chart">
              <Chart chartRef={chartRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;