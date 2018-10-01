import React, { Component } from 'react';
import MushroomCard from './MushroomCard'


class Garden extends Component {

  increaseCounter = () => {
    this.setState(prevState => {counter: this.state.counter + 1})
  }

  render(){
    const  { displayedGarden, mushrooms } = this.props
    return(
      <div>
        <h2> Garden: {displayedGarden.name} </h2>
        <h3> Mushrooms: {
            mushrooms.map(mshrm => {
              return <MushroomCard mushroom={mshrm}/>
          })
        }</h3>
      </div>
    )
  }

}

export default Garden
