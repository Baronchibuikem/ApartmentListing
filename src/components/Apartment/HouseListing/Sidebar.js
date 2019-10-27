import React from "react";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="author-card">
        <div className="author-img set-bg" data-setbg="img/author.jpg"></div>
        <div className="author-info">
          <h5>Gina Wesley</h5>
          <p>Real Estate Agent</p>
        </div>
        <div className="author-contact">
          <p>
            <i className="fa fa-phone"></i>(567) 666 121 2233
          </p>
          <p>
            <i className="fa fa-envelope"></i>ginawesley26@gmail.com
          </p>
        </div>
      </div>
      <div className="contact-form-card">
        <h5>Do you have any question?</h5>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <textarea placeholder="Your question"></textarea>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
}
