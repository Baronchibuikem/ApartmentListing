import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/layout/Homepage";
import ListingPage from "./components/layout/ListingPage";
import HouseListingDetail from "./components/Apartment/HouseListing/HouseListingDetail";
import AgentList from "./components/Agents/AgentList";
import AgentListDetail from "./components/Agents/AgentListDetail";
import AboutUs from "./components/Apartment/AboutUsPage/AboutUs";
import OurServices from "./components/Apartment/OurServices/Ourservices";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/apartments" component={ListingPage} />
    <Route exact path="/apartment/:id" component={HouseListingDetail} />
    <Route exact path="/agents" component={AgentList} />
    <Route exact path="/agent/:id" component={AgentListDetail} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/services" component={OurServices} />
  </Switch>
);
export default BaseRouter;
