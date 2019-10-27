import React from "react";
import HouseListings from "../Apartment/HouseListing/HouseListings";
import HouseListingBgImage from "../Apartment/HouseListing/HouseListingBgImage";

export default function ListingPage() {
  return (
    <div>
      <HouseListingBgImage />
      <HouseListings />
    </div>
  );
}
