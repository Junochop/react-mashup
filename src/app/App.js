import React, { Component } from 'react';

import Animals from '../components/Animals/Animals.js';

import connection from '../firebaseRequests/connection';

import mashupRequests from '../firebaseRequests/animals';

import './App.css';

class App extends Component {
  state = {
    mashups: [],
  }

  componentDidMount () {
    // connection(fb);
    connection();

    mashupRequests.getRequest()
      .then((mashups) => {
        this.setState({ mashups});
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Animals mashups={this.state.mashups} />
        </div>
      </div>
    );
  }
}

export default App;
