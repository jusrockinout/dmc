import React from "react";
import About from "./About";

class Header extends React.Component {
  render() {
    return (
      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">DMC</h1>
                <p className="intro-text">
                  Find the best products in your area. Shop, save, enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;