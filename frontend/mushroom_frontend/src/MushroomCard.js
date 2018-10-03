import React, { Component } from 'react';

class MushroomCard extends Component{

  render(){
    return(
      <div>
        {"  " + this.props.mushroom.name}
      </div>
    )
  }
}
export default MushroomCard
