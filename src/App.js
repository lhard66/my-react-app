import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const usr = {
  firstName: "jim",
  lastName: "tomato"
}

function formatName(usr) {
  return usr.firstName + ' - ' + usr.lastName;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> Hello world,{formatName(usr)}!yes.
        </p>        
      </div>
    );
  }
}

export default App;
