import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const languages = [
      {name:'Javascript',rank:1},
      {name:'Java',rank:2},
      {name:'Python',rank:3},
      {name:'Ruby',rank:4},
      {name:'PHP',rank:5},
      {name:'C++',rank:6},
      {name:'CSS',rank:7},
      {name:'C#',rank:8},
      {name:'C',rank:9},
      {name:'Go',rank:10},
      {name:'Shell',rank:11},
      {name:'Objective C',rank:12},
      {name:'Scala',rank:13},
      {name:'Swift',rank:14},
      {name:'Typescript',rank:15}
    ];

    const languageEles = languages.map(language => 
      <div>
        <h3>{language.name}</h3>
        <p>{language.rank}</p>
      </div>)

    return (
      <div className="App">
       {languageEles}
      </div>
    );
  }
}

export default App;
