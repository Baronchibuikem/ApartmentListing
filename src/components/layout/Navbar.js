import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBContainer
} from "mdbreact";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const bgPink = { backgroundColor: "#30caa0" };
    const link = { padding: "10px", color: "white" };
    return (
      <div>
        <header>
          <MDBNavbar dark expand="sm" fixed="top" style={bgPink}>
            <MDBContainer>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavbarBrand href="/">EMPIREHOUSING</MDBNavbarBrand>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <Link style={link} to="/">
                      HOME
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link style={link} to="/apartments">
                      LISTING
                    </Link>
                  </MDBNavItem>

                  <MDBNavItem>
                    <Link style={link} to="/about-us">
                      ABOUT US
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link style={link} to="/services">
                      OUR SERVICES
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link style={link} to="/agents">
                      AGENTS
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link style={link} to="/">
                      CONTACT
                    </Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;
