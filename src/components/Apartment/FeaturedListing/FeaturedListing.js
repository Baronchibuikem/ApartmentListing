import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFeaturedApartments } from "../../../actions/apartments";

class FeaturedListings extends Component {
  static propTypes = {
    featuredApartments: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getFeaturedApartments();
  }

  render() {
    return (
      <Fragment>
        <section className="feature-section spad">
          <div className="container">
            <div className="section-title text-center">
              <h3>Featured Listings</h3>
              <p>Browse houses and flats for sale and to rent in your area</p>
            </div>
            <div className="row">
              {this.props.featuredApartments.map(apartment => (
                <div className="col-lg-4 col-md-6" key={apartment.id}>
                  <div className="feature-item">
                    <div className="feature-pic set-bg" data-setbg>
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
                              <i className="fa fa-bed"></i> {apartment.bedrooms}{" "}
                              Bedrooms
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
                      <div className="room-price">${apartment.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// this comes from the reducer
const mapStateToProps = state => ({
  featuredApartments: state.apartments.featuredApartments
});

export default connect(
  mapStateToProps,
  { getFeaturedApartments }
)(FeaturedListings);
