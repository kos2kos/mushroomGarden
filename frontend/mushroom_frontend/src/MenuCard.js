import React, { Component } from 'react';
class MenuCard extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <img src={require(`../public/images/${this.props.mushroom.image}`)} alt="" height="80" width="60"/>
        <h4> {"Name " + this.props.mushroom.name}</h4>
        <h4>
        {"Price:  " + this.props.mushroom.price}</h4>
      <button onClick={() =>this.props.addToGarden(this.props.mushroom)}padding-bottom= "50px">Add {this.props.mushroom.name} To Garden</button>
      </div>
    )
  }
}
export default MenuCard
