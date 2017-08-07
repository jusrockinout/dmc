import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Search from './Components/Search';
import Map from './Components/Map';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
