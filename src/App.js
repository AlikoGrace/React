import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <p>This is really working</p>
          <Person name = 'Aliko' age='21'/>
          <Person name = 'Amos' age='27'/>
          <Person name = 'Gifty' age='24'/>
          <Person name = 'Blessing' age='16'/>
      </div>
    );
  }
}

export default App;
