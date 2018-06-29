import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {mashups} = this.props;
    const animalsItemComponents = mashups.map((item) => {
      return (
        <li key = {item.id}>{item.name}</li>
      );
    });
    return (
      <div className="Animals">
        <h2>Animal</h2>
        <ul>
          {animalsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Animals;
