import React from "react";
import HomepageTopView from "../Apartment/HomepageTopView/HomepageTopView";
import RecentListings from "../Apartment/RecentListings/RecentListings";
import OurServices from "../Apartment/OurServices/Ourservices";
import FeaturedListings from "../Apartment/FeaturedListing/FeaturedListing";

export default function Homepage() {
  return (
    <div>
      <HomepageTopView />
      <RecentListings />
      <OurServices />
      <FeaturedListings />
    </div>
  );
}
