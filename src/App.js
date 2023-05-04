import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


  const App = props => {
    const [personState, setPersonState ] = useState({
      persons :[
        {name: 'Aliko', age:'25' },
        {name: 'Amos', age:'27' },
        {name: 'Godwin', age:'35' },
        {name: 'Blessing', age:'15' },
      ],

    });
    const [otherstate, setOtherState]=useState('some other state');

    const switchNameHandler = () =>{
      // console.log("Was clicked")
      setPersonState({
        persons: [
          {name: 'Ama', age: '25'},
          {name: 'Kofi', age: '27'},
          {name: 'Godwin', age: '15'},
          {name: 'Blessing', age: '5'},
        ],
        otherState: personState.otherState

      });
    };


    return (
      <div className="App">
        {/*this keyword only works in classes*/}
        <h1>Hello world</h1>
        <button onClick={switchNameHandler}>Switch</button>
        <p>This is really working</p>
          <Person name = {personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
          <Person name = {personState.persons[2].name} age={personState.persons[2].age}/>
          <Person name = {personState.persons[3].name} age={personState.persons[3].age}/>
      </div>
    );
}

export default App;

