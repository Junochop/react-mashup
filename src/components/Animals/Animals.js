import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {mashups} = this.props;
    const animalsItemComponents = mashups.map((item) => {
      return (
        <div key={item.id} className='img-thumbnail Animals'>{item.name}
          <img className='animal-image' src={item.imgUrl} alt="card"/>
          <p>{item.description}</p>
        </div>
      );
    });
    return (
      <div className="col-sm-6 col-md-4">
        <h2>Animal</h2>
        <ul>
          {animalsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Animals;
