import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="container_services my-5">
        <header className="text-md-left text-xs-center">
          <h4>Services Component</h4>
        </header>

        {/* <!-- Feature Services --> */}
        <section className="d-flex bg-light my-4" id="feature-cards">
          <div className="d-flex justify-content-center">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 align-self-center">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mx-auto text-center">
                            <i className="fa fa-upload fa-4x text-info"></i>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12 text-center">
                            <p className="text-info font-weight-bold">Cloud Upload</p>
                            <p className="text-secondary">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus dicta error.
                            </p>
                            <button className="btn btn-info mt-3 px-4">
                              Click Here
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mx-auto text-center">
                            <i className="fa fa-desktop fa-4x text-warning"></i>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12 text-center">
                            <p className="text-info font-weight-bold">Computer Service</p>
                            <p className="text-secondary">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus dicta error.
                            </p>
                            <button className="btn btn-warning mt-3 px-4">
                              Click Here
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mx-auto text-center">
                            <i className="fa fa-envelope fa-4x text-success"></i>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12 text-center">
                            <p className="text-info font-weight-bold">E-Mail Service</p>
                            <p className="text-secondary">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus dicta error.
                            </p>
                            <button className="btn btn-success mt-3 px-4">
                              Click Here
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mx-auto text-center">
                            <i className="fa fa-wrench fa-4x text-danger"></i>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12 text-center">
                            <p className="text-info font-weight-bold">Quality Service</p>
                            <p className="text-secondary">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus dicta error.
                            </p>
                            <button className="btn btn-danger mt-3 px-4">
                              Click Here
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
