import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getAgents } from "../../actions/apartments";

import "../Apartment/HouseListing/HouseListings.css";

class AgentListing extends Component {
  static propTypes = {
    agents: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getAgents();
  }

  render() {
    return (
      <Fragment>
        <section className="feature-section spad">
          <div className="container">
            <div className="section-title text-center">
              <h4>LIST OF ALL OUR CURRENT REPRESENTATIVES</h4>
              <h5>
                Please only the representatives on this list are authourized to
                engage in any business transactions on our behalf
              </h5>
              <h5 className="text-danger">
                We are not responsible for any transaction done with any other
                individual or group that are not listed on this page
              </h5>
            </div>
            <div className="row">
              {this.props.agents.map(agent => {
                const { id } = agent;
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="feature-item">
                      <div class="feature-pic set-bg" data-setbg>
                        <img src={agent.image} alt={agent.name} />
                      </div>
                      <div className="feature-text">
                        <div className="text-center feature-title">
                          <h5>
                            <i className="fa fa-phone"> </i>
                            {agent.phone}
                          </h5>
                          <p>
                            <i className="fa fa-envelope"></i> {agent.email}
                          </p>
                        </div>

                        <div className="room-price">
                          <Link to={`/agent/${id}`}>{agent.name}</Link>
                        </div>
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
const mapStateToProps = state => ({
  agents: state.apartments.agents
});

export default connect(
  mapStateToProps,
  { getAgents }
)(AgentListing);
