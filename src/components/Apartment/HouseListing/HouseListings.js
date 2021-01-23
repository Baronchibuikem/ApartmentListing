import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getApartments } from "../../../actions/apartments";

import "./HouseListings";

class HouseListings extends Component {
  static propTypes = {
    apartments: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getApartments();
  }

  render() {
    return (
      <Fragment>
        <section className="feature-section spad">
          <div className="container">
            <div className="section-title text-center">
              <h4>Browse houses and flats for sale and to rent in your area</h4>
            </div>
            <div className="row">
              {this.props.apartments.map((apartment) => {
                const { id } = apartment;
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="feature-item">
                      <div class="feature-pic set-bg" data-setbg>
                        <img src={apartment.image1} alt={apartment.name} />
                      </div>
                      <div className="feature-text">
                        <div className="text-center feature-title">
                          <h5>{apartment.name}</h5>
                          <p>
                            <i className="fa fa-map-marker"></i>{" "}
                            {apartment.Location}
                          </p>
                        </div>
                        <div className="room-info-warp">
                          <div className="room-info">
                            <div className="rf-left">
                              <p>
                                <i className="fa fa-th-large"></i>{" "}
                                {apartment.created}hours ago
                              </p>
                              <p>
                                <i className="fa fa-bed"></i>{" "}
                                {apartment.bedrooms} Bedrooms
                              </p>
                            </div>
                            <div className="rf-right">
                              <p>
                                <i className="fa fa-home"></i> {apartment.offer}
                              </p>
                              <p>
                                <i className="fa fa-bath"></i>{" "}
                                {apartment.bathrooms} Bathrooms
                              </p>
                            </div>
                          </div>
                          <div className="room-info">
                            <div className="rf-left">
                              <p>
                                <i className="fa fa-user"></i> {apartment.agent}
                              </p>
                            </div>
                            <div className="rf-right">
                              <p>
                                <i className="fa fa-clock-o"></i>{" "}
                                {apartment.available} available
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link className="room-price" to={`/apartment/${id}`}>
                          ₦{apartment.price}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  apartments: state.apartments.apartments,
});

export default connect(mapStateToProps, { getApartments })(HouseListings);
