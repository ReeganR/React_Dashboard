import React, { Component } from "react";
import Cards from "./dashboard/Cards.js";
import Profile from "./dashboard/Profile.js";
import Projects from "./dashboard/Projects.js";
import Services from "./dashboard/Services.js";
import Contact from "./dashboard/Contact.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../css/dashboard.css";
import "../css/app.css";


class App extends Component {
  render() {
    return (
        <div className="wrapper">
        <div className="wrapper_inner">
          <div className="vertical_wrap">
            <div className="backdrop"></div>
{/* Side Menu */}
            <div className="vertical_bar">
              <div className="profile_info">
                <div className="img_holder">
                <i className="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
                </div>
                <p className="title">Reegan Reethas</p>
                <p className="sub_title">reeganger@gmail.com</p>
              </div>
              <ul className="menu">
                <li>
                  <a href="#" className="active">
                    <span className="icon">
                      <i className="fa fa-home"></i>
                    </span>
                    <span className="text">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                    <i className="fa fa-area-chart" aria-hidden="true"></i>
                    </span>
                    <span className="text">Reports</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                    <i className="fa fa-cube" aria-hidden="true"></i>
                    </span>
                    <span className="text">Statistics</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="text">Account</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa fa-cog"></i>
                    </span>
                    <span className="text">Settings</span>
                  </a>
                </li>
              </ul>

              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main_container">
            <div className="top_bar">
              <div className="hamburger">
                <i className="fa fa-bars"></i>
              </div>
              <div className="logo">Dashboard</div>
              <div className="icon-bar">
	    	<a href="#">
                  <i className="fa fa-search"></i>
                </a>
                <a href="#">
                  <i className="fa fa-home"></i>
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="#">
                  <i className="fa fa-globe"></i>
                </a>
              </div>
            </div>

{/* All Components / Main Contents */}

            <div className="container content_container">
              <div className="content">
                <Cards />
                <Profile />
				<Projects />
				<Services />
				<Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
