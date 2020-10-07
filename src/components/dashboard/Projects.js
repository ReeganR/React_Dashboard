import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="container_projects my-5">
        <header className="text-md-left text-xs-center">
          <h4>Projects Component</h4>
        </header>

        <div className="my-4">
          <section>
            <div className="row">
              <div className="col-12">
                <div className="card card-list">
                  <div className="card-body">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR9842</a>
                          </th>
                          <td>Health Insurance</td>
                          <td>
                            <span className="badge badge-success">Done</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR1848</a>
                          </th>
                          <td>Car Insurance</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR7429</a>
                          </th>
                          <td>Banking</td>
                          <td>
                            <span className="badge badge-danger">
                              Improvement
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR7429</a>
                          </th>
                          <td>Consulting</td>
                          <td>
                            <span className="badge badge-info">Processing</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR1848</a>
                          </th>
                          <td>Ecoomerce</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR7429</a>
                          </th>
                          <td>Products</td>
                          <td>
                            <span className="badge badge-danger">
                              Improvement
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a className="text-info">OR9842</a>
                          </th>
                          <td>Mobile App</td>
                          <td>
                            <span className="badge badge-success">Done</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
