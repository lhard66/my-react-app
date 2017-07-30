import React, { Component } from 'react';
// import logo from './logo.svg';
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
import Greeting from './components/advance/PropTypes';
import CustomTextInput from './components/advance/Ref';
import NameForm from './components/advance/NoControl';
import CounterButton from './components/advance/Performance.js'

// const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome boy !</h2>
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
        <Greeting name="jim"/>
        <CustomTextInput/>
        <NameForm/>
        <CounterButton/>
      </div>
    );
  }
}

export default App;
