import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Foot from './components/footer';
import Main from './pages/main';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Main />
      <Foot />
      </div>
    );
  }
}

export default App;
