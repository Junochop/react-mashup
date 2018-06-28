import React, { Component } from 'react';

import Animals from '../components/Animals/Animals.js';

import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals />
        </div>
      </div>
    );
  }
}

export default App;
