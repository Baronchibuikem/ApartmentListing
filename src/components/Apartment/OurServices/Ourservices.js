import React, { Component } from "react";
import "./OurServices.css";

export default class Ourservices extends Component {
  render() {
    return (
      <section
        className="services-section spad set-bg"
        data-setbg="img/service-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 service-bg">
              {/* <img src="img/service.jpg" alt=""/> */}
            </div>
            <div className="col-lg-5 offset-lg-1 pl-lg-0">
              <div className="section-title text-white">
                <h3>OUR SERVICES</h3>
                <p>We provide the perfect service for </p>
              </div>
              <div className="services">
                <div className="service-item">
                  <i className="fa fa-comments"></i>
                  <div className="service-text">
                    <h5>Consultant Service</h5>
                    <p>
                      Our vast wealth of experienced couple with seasoned estate
                      management professionals allows us to offer you the best
                      Consultant you can get.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <i className="fa fa-home"></i>
                  <div className="service-text">
                    <h5>Properties Management</h5>
                    <p>
                      With over 2000 properties in our portfolio and more than
                      1600 sold over the period of 2 years solidifies the trust
                      our clients have in entrusting us with their property. WE
                      SALE FAST!!!
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <i className="fa fa-briefcase"></i>
                  <div className="service-text">
                    <h5>Rent and Sale and Maintenance</h5>
                    <p>
                      We offer the best Apartments in Nigeria both for Sale or
                      Rent and our payment plan is the best and most flexible in
                      Nigeria, we also provide maintenance for our various
                      apartments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
