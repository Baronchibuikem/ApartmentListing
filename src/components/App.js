import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { Provider } from "react-redux";
import store from "../store";
import "../assests/css/style.css";
import BaseRouter from "../routes";
import Footer from "./Apartment/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <Navbar />
            <BaseRouter />
            <Footer />{" "}
          </Router>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
