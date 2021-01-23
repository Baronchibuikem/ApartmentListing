import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/img/lo.jpeg";
import "../../assests/css/custom.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="logo" width="30%" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav nav-fill w-100">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apartments">
                PROPERTIES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/agents">
                REALTORS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">
                SERVICES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
