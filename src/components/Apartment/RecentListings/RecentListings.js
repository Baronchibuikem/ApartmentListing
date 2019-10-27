import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getRecentApartments } from "../../../actions/apartments";

class RecentListings extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getRecentApartments()(dispatch);
  }
  render() {
    return (
      <Fragment>
        {/* Properties section */}
        <section className="properties-section spad">
          <div className="container">
            <div className="section-title text-center">
              <h3>RECENT PROPERTIES</h3>
              <p>Discover how much the latest properties have been sold for</p>
            </div>
            <div className="row">
              {this.props.recentListings.map(recentList => {
                return (
                  <div className="col-md-6" key={recentList.id}>
                    <div className="propertie-item set-bg ">
                      <img
                        src={recentList.image1}
                        alt={recentList.name}
                        height="100%"
                      />
                      <div className="propertie-info text-white">
                        <div className="info-warp">
                          <h5 className="text-uppercase">{recentList.name}</h5>
                          <p>
                            <i className="fa fa-map-marker">
                              {recentList.Location}
                            </i>{" "}
                          </p>
                        </div>
                        <div className="price">{recentList.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Properties section end */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { recentListings: state.apartments.recentApartments };
};

export default connect(mapStateToProps)(RecentListings);
