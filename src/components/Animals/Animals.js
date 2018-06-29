import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {mashups} = this.props;
    const animalsItemComponents = mashups.map((item) => {
      return (
        <div key={item.id} class='img-thumbnail'>{item.name}
          <img class='animal-image' src={item.imgUrl} alt="card"/>
          <p>{item.description}</p>
        </div>
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
