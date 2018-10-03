import React, { Component } from 'react';
import MushroomCard from './MushroomCard';
import './Garden.css';


class Garden extends Component {

  increaseCounter = () => {
    this.setState(prevState => {counter: this.state.counter + 1})
  }

  render(){
    const  { displayedGarden, mushrooms } = this.props
    return(
      <div className='garden'>
        <h2> Garden: {displayedGarden.name} </h2>
        <h3> Mushrooms: {
            mushrooms.map(mshrm => {
              return <MushroomCard mushroom={mshrm} key={Math.floor(Math.random() * Math.floor(7026842189))}/>
          })
        }</h3>
      </div>
    )
  }

}

export default Garden
