import React, { Component } from "react";
import axios from "axios";

class SubscribeForm extends Component {
  handleFormSubmit = event => {
    // We use preventDefault() to
    event.preventDefault();
    // we retrieve the value entered by a user in our email field and store it in a variable
    const email = event.target.email.value;
    // using axios we send a post request to our server with the retrieve value stored in our variable attached to it
    return axios
      .post("http://127.0.0.1:8000/apartment/subscribe/", {
        email
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          className="footer-newslatter-form"
          onSubmit={this.handleFormSubmit}
        >
          <input type="email" placeholder="Email address" name="email" />
          <button type="submit">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SubscribeForm;
