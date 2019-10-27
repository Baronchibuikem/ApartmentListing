import React from "react";
import img from "../../../assests/img/about.jpg";

export default function AboutUs() {
  return (
    <section className="container text-justify page-section">
      <div className="mt-5 pt-5">
        <img className="mb-5" src={img} alt="" />
        <div className="row about-text container">
          <div className="col-xl-6 about-text-left">
            <h5>ABOUT US</h5>
            <p>
              EmpireHousing is a Nigeria Registered Real Estate Property
              Enlisting Co-operation which has been operational since 2010 with
              it's headquaters in Abuja and several branches across the name.
            </p>
            <p>
              Since it's inception, we have successfully completed over 1000
              property sales and rent and have our agents now all over Nigeria.
              <br />
              Our management and staff are continuously improving our process to
              ensure our clients get quality housing at affordable prices and
              great locations
            </p>
            <p>
              We have gone a step futher to integrate a 3-Dimensional Virtual
              Reality to our platforms where you can navigate through any of our
              listed apartment and get a feel of how the inner part of the
              apartment are all from the comfort of your house
            </p>

            <p>
              We also over an optional mobile platform where you get access to
              our utility functionality. This means you can ask for a personnel
              to come service your car, fix up electricity, feel your gas, take
              care of your laundry and we got you covered
            </p>
          </div>
          <div className="col-xl-6  about-text-right">
            <h5>OUR QUALITY</h5>
            <p>
              Through our poll of seasoned Engineers, Architects and Real Estate
              Managers, we ensure all listed properties are tested to ensure it
              comforms with standard practice and materials used for building
              are of high standard. So all our Apartments are of high standard.
            </p>
            <p className="mark">So why choose us?</p>
            <ul className="about-list">
              <li>
                <i className="fa fa-check-circle"></i> All our houses are
                ensured. Meaning incase of any incident, we got you covered
              </li>
              <li>
                <i className="fa fa-check-circle"></i> We offer our clients
                warrantly of 6months. So within six months, you get to ensure
                your apartment and if for any reason someone get spoilt, we will
                fix it for you at no cost{" "}
              </li>
              <li>
                <i className="fa fa-check-circle"></i> With our technological
                driven infrastructure, we bring our houses to you through a
                3-dimensional virtual reality. So you don't even need to leave
                your house to checkout out our apartments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
