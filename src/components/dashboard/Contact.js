import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container_contact my-5">
        <header className="text-md-left text-xs-center">
          <h4>Contact Component</h4>
        </header>

        <div className="my-4">
          {/* <!--Section: Content--> */}
          <section className="contact-section dark-grey-text mb-5">
            {/* <!-- Form with header --> */}
            <div className="card">
              {/* <!-- Grid row --> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-lg-8">
                  <div className="card-body form">
                    {/* <!-- Header --> */}
                    <h4 className="font-weight-bold dark-grey-text mt-4">
                      <i className="fa fa-envelope pr-2 mr-1 text-info"></i>
                      Write to us:
                    </h4>

                    {/* <!-- Grid row --> */}
                    <div className="row">
                      {/* <!-- Grid column --> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="form-contact-name"
                            className="form-control"
                          />
                          <label for="form-contact-name" className="">
                            Your name
                          </label>
                        </div>
                      </div>
                      {/* <!-- Grid column -->

            <!-- Grid column --> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="form-contact-email"
                            className="form-control"
                          />
                          <label for="form-contact-email" className="">
                            Your email
                          </label>
                        </div>
                      </div>
                      {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row -->

          <!-- Grid row --> */}
                    <div className="row">
                      {/* <!-- Grid column --> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="form-contact-phone"
                            className="form-control"
                          />
                          <label for="form-contact-phone" className="">
                            Your phone
                          </label>
                        </div>
                      </div>
                      {/* <!-- Grid column -->

            <!-- Grid column --> */}
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="form-contact-company"
                            className="form-control"
                          />
                          <label for="form-contact-company" className="">
                            Your company
                          </label>
                        </div>
                      </div>
                      {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row -->

          <!-- Grid row --> */}
                    <div className="row">
                      {/* <!-- Grid column --> */}
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <textarea
                            id="form-contact-message"
                            className="form-control md-textarea"
                            rows="3"
                          ></textarea>
                          <label for="form-contact-message">Your message</label>
                          <a className="btn-floating btn-lg blue">
                            <i className="fa fa-paper-plane text-info"></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                  </div>
                </div>
                {/* <!-- Grid column -->

      <!-- Grid column --> */}
                <div className="col-lg-4">
                  <div className="card-body contact text-center h-100 white-text bg-info">
                    <h4 className="font-weight-bold my-4 pb-2">
                      Contact information
                    </h4>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          <i className="fa fa-map-marker pr-2 text-warning"></i>
                          Munich, 81539, Germany
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="fa fa-phone pr-2 text-warning"></i>+49
                          1234567890
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="fa fa-envelope pr-2 text-warning"></i>
                          reeganger@gmail.com
                        </p>
                      </li>
                    </ul>
                    <hr className="hr-light my-4" />
                    <ul className="list-inline text-center list-unstyled">
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg tw-ic text-white">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg li-ic text-white">
                          <i className="fa fa-linkedin"> </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="p-2 fa-lg ins-ic text-white">
                          <i className="fa fa-instagram"> </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
            {/* <!-- Form with header --> */}
          </section>
          {/* <!--Section: Content--> */}
        </div>
      </div>
    );
  }
}

export default Contact;
