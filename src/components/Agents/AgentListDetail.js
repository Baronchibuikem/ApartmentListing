import React, { Component } from "react";
import { connect } from "react-redux";
import { getAgentId } from "../../actions/apartments";

class AgentListDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch } = this.props;
    getAgentId(id)(dispatch);
  }

  render() {
    const { name, phone, email, image } = this.props.agentDetail;
    return (
      <section className="container page-section mt-5 pt-5">
        <div className=" row mt-5">
          <div className="col-md-6">
            <img src={image} alt={name} className="mx-auto my-auto" />
          </div>
          <div className="col-md-6">
            <h4>{name}</h4>
            <hr />
            <h5>
              <i className="fa fa-phone"> </i>
              {phone}
            </h5>
            <h5>
              {" "}
              <i className="fa fa-envelope"></i>
              {email}
            </h5>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return { agentDetail: state.apartments.agentId };
};

export default connect(mapStateToProps)(AgentListDetail);
