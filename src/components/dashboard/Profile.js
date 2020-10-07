import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="container_profile my-5">
        <header className="text-md-left text-xs-center">
          <h4>Profile Component</h4>
        </header>

        <div className="row my-4">
          <div className="col-md-12 col-lg-4 col-sm-12 mx-auto">
            <section>
              <div className="list-group list-group-flush z-depth-1 rounded">
                <div className="list-group-item active d-flex justify-content-start align-items-center py-3">
                <i className="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
                  <div className="d-flex flex-column pl-3">
                    <p className="font-weight-normal mb-0">Reegan Reethas</p>
                    <p className="small mb-0">Frontend Developer</p>
                  </div>
                </div>
                <a
                  href="#!"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  Projects
                  <span className="badge badge-info badge-pill">26</span>
                </a>
                <a
                  href="#!"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  Tasks
                  <span className="badge badge-warning badge-pill">5</span>
                </a>
                <a
                  href="#!"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  Completed projects
                  <span className="badge badge-success badge-pill">25</span>
                </a>
                <a
                  href="#!"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  Followers
                  <span className="badge badge-danger badge-pill">728</span>
                </a>
              </div>
            </section>
          </div>
          <div className="col-md-12 col-lg-8 mx-auto col-sm-12">
            <div className="item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              illum ipsum inventore, ratione, repudiandae iste. At rerum dolorum
              quidem, modi fugiat numquam assumenda fugit recusandae perferendis
              ullam dolorem pariatur consectetur ex suscipit nulla officiis
              totam laboriosam vel exercitationem ad. Dolore assumenda vitae
              repudiandae possimus. Sint expedita, error molestiae perspiciatis
              magni. consectetur adipisicing elit. Modi illum ipsum inventore,
              ratione, repudiandae iste. At rerum dolorum quidem, modi fugiat
              numquam assumenda fugit recusandae perferendis
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
