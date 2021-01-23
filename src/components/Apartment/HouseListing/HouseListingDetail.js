import React, { Component } from "react";
import { connect } from "react-redux";
import HouseListingBgImage from "./HouseListingBgImage";
import { getApartmentId } from "../../../actions/apartments";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

class HouseListingDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch } = this.props;
    getApartmentId(id)(dispatch);
  }

  render() {
    const {
      name,
      Location,
      price,
      bedrooms,
      bathrooms,
      image1,
      image2,
      image3,
      image4,
      agent,
      image5,
      description,
      available,
      agent_image,
      agent_phone,
    } = this.props.listingDetail;
    return (
      <section className="page-section">
        <HouseListingBgImage />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 single-list-page">
              <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={5}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={image1}
                          alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={image2}
                          alt="Second slide"
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Second text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={image3}
                          alt="Third slide"
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Third text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={image4}
                          alt="fourth slide"
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Fourth Text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={image5}
                          alt="Fifth slide"
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Fifth text</p>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
              <div className="single-list-content">
                <div className="row">
                  <div className="col-xl-8 sl-title">
                    <h2>{name}</h2>
                    <p>
                      <i className="fa fa-map-marker"></i>
                      {Location}
                    </p>
                  </div>
                  <div className="col-xl-4 price-btn">{price}</div>
                </div>
                <h3 className="sl-sp-title">Property Details</h3>
                <div className="row property-details-list">
                  <div className="col-md-6 col-sm-6">
                    <p>
                      <i className="fa fa-th-large"></i> {available} available
                    </p>
                    <p>
                      <i className="fa fa-bed"></i> {bedrooms} Bedrooms
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-6 ">
                    <p>
                      <i className="fa fa-bath"></i> {bathrooms} Bathrooms
                    </p>
                    <p>
                      <i className="fa fa-user"></i> {agent}
                    </p>
                  </div>
                </div>
                <h3 className="sl-sp-title">Description</h3>
                <div className="description">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 single-list-page">
              <h4>{agent}</h4>
              <h6>
                <u>0{agent_phone}</u>
              </h6>
              <img className="d-block w-100" src={agent_image} alt="agent" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return { listingDetail: state.apartments.apartmentId };
};

export default connect(mapStateToProps)(HouseListingDetail);
