import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons :[
      {name: 'Aliko', age:'25' },
      {name: 'Amos', age:'27' },
      {name: 'Godwin', age:'35' },
      {name: 'Blessing', age:'15' },
    ],
    otherstate: 'some other value'
  }
  switchNameHandler = () =>{
    // console.log("Was clicked")
    this.setState(
        {
          persons :[
            {name: 'Ama', age:'25' },
            {name: 'Kofi', age:'27' },
            {name: 'Godwin', age:'15' },
            {name: 'Blessing', age:'5' },
          ]
        }

    )
}
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        {/*the this keywoed signifies the class*/}
        <button onClick={this.switchNameHandler}>Switch</button>
        <p>This is really working</p>
          <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}/>
          <Person name = {this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
