import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Clock from './Clock';
// import formatName from './FormateName';
// import EventBase from './components/EventBase';
// import EleToggle from './components/IfBase';
// import NumberList from './components/ForBase';
// import NameForm from './components/FormBase';
// import Reservation from './components/FormBase2';
// import Calculator from './components/temperatureCalc/Calculator';
// import SignUpDialog from './components/Combination';
import Func from './components/advance/Function';
import FilterableProductTable from './search/FilterableProductTable';

// const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Func/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code>
        </p>
        {/* jsx的基本使用
        <p>
           Hello world,{formatName({ firstName: "lucifor", lastName: "ff91" })}
        </p>
        <p>
          <Clock />
        </p>
        <p>
          <EventBase />
        </p>
        <p>
          <EleToggle />
        </p>
        <p>
          <h3>循环：</h3>
          <NumberList numbers={numbers}/>
        </p>
        <p>
          <NameForm />
        </p>
        <p>
          <Reservation />
        </p>
        <div className="App-border">
          <Calculator />
        </div>
        <div>
          <SignUpDialog />
        </div>
        */}
        <FilterableProductTable/>
      </div>
    );
  }
}

export default App;
