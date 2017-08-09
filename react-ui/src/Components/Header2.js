import React, { Component } from 'react';

class Header2 extends Component {
  render() {
       return (
      <div className="container" id="header3">
      <header id="home">
        <div className="row">
          <div className="col-md-12">
            <nav id="nav-wrap">
              <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>     
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </div>
    );
  }
}

export default Header2;