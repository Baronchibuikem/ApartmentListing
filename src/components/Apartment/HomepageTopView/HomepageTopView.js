import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomepageTopView.css";

class HomepageTopView extends Component {
  render() {
    return (
      <div>
        {/* Hero section */}
        <section className="hero-section set-bg">
          <div className="container hero-text text-white">
            <h3>Find available apartments anywhere in Nigeria</h3>
            <h6 className="text-white">
              Search real estate apartment houses and condos and more on
              Properties.com
              <br />
              Find property info from our most comprehensive source data.
            </h6>
            <Link to="/apartments" className="site-btn">
              VIEW DETAIL
            </Link>
          </div>
        </section>
        {/* Hero section end */}
        {/* Filter form section */}
        {/* <div className="filter-search ">
          <div className="container">
            <form className="filter-form ">
              <input
                type="text"
                placeholder="Enter a street name, address number or keyword"
              />
              <select>
                <option value="City">City</option>
              </select>
              <select>
                <option value="City">State</option>
              </select>
              <button className="site-btn fs-submit">SEARCH</button>
            </form>
          </div>
        </div> */}
        {/* Filter form section end */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomepageTopView)
export default HomepageTopView;
