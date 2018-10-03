import React, { Component } from 'react';

class MushroomCard extends Component{

  render(){
    return(
      <div>
        Mushrooms
        {"  " + this.props.mushroom.name}
        <button onClick={() => this.props.sellMushroom(this.props.mushroom)}>Salvage {"  ",this.props.mushroom.name}</button>
      </div>
    )
  }
}
export default MushroomCard
