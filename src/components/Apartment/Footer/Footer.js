import React from "react";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

export default function Footer() {
  return (
    <footer className="footer-section set-bg">
      <div className="container">
        <div className="row footer-widget">
          <div className="col-lg-4 col-md-6 ">
            <div>
              <h5 className="fw-title">PARTNER WITH US</h5>
              <p>Become an Agent</p>
              <p>Career</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-widget">
            <div className="contact-widget">
              <h5 className="fw-title">CONTACT US</h5>
              <p>
                <i className="fa fa-map-marker"></i>No 8 Duke's Close, Area 11
                Garki, Abuja{" "}
              </p>
              <p>
                <i className="fa fa-phone"></i>(+234) 7030000001
              </p>
              <p>
                <i className="fa fa-envelope"></i>suppor@ToqueHouZn.com
              </p>
              <p>
                <i className="fa fa-clock"></i>Mon - Sat, 08 AM - 06 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6  footer-widget">
            <div className="newslatter-widget">
              <h5 className="fw-title">NEWSLETTER</h5>
              <p>
                Subscribe your email to get the latest news and new offer also
                discount
              </p>
              {/* <form className="footer-newslatter-form">
                <input type="text" placeholder="Email address" />
                <button>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form> */}
              <SubscribeForm />
              <div>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="twitter"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="instagram"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-nav">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/apartments">Listing</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/agents">Agent</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
