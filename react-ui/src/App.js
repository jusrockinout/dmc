import React, { Component } from 'react';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';


// Javascript files below
// import './vendor/jquery/jquery.js';
// import './vendor/jquery/jquery.min.js';

// import $ from './vendor/jquery/jquery.js';

// import './js/grayscale.js';
// import './js/grayscale.min.js';

import './vendor/bootstrap/css/bootstrap.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/fonts/glyphicons-halflings-regular.eot';
import './vendor/bootstrap/fonts/glyphicons-halflings-regular.svg';
import './vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf';
import './vendor/bootstrap/fonts/glyphicons-halflings-regular.woff';
import './vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2';

// import './vendor/bootstrap/js/bootstrap.js';
// import './vendor/bootstrap/js/bootstrap.min.js';

import './vendor/font-awesome/css/font-awesome.css';
import './vendor/font-awesome/css/font-awesome.min.css';

import './vendor/font-awesome/fonts/fontawesome-webfont.eot';
import './vendor/font-awesome/fonts/fontawesome-webfont.svg';
import './vendor/font-awesome/fonts/fontawesome-webfont.ttf';
import './vendor/font-awesome/fonts/fontawesome-webfont.woff';
import './vendor/font-awesome/fonts/fontawesome-webfont.woff2';
import './vendor/font-awesome/fonts/FontAwesome.otf';

// import $ from 'jquery';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Search from './Components/Search';
import Map from './Components/Map';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    console.log("render: True");
     return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Search />
        <Map />
        <Contact />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default App;