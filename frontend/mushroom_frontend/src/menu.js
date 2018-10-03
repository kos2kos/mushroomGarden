import React, { Component } from 'react'
import MenuCard from './MenuCard'
import './menu.css'

class Menu extends Component {
  constructor() {
    super()
    this.state ={
      mushrooms: []
    }

  }

  componentDidMount() {
    fetch("http://localhost:3000/mushrooms")
      .then(res => res.json())
      .then(mshrooms => this.setState({mushrooms: mshrooms}))
  }



  render(){
    return(
      <div className='side-bar'>
        <h1>Menu Purchase Below</h1>
        <div className='mushroom-list'>
          {this.state.mushrooms.map(mshroom =>{
            return <MenuCard key={mshroom.id} mushroom={mshroom} addToGarden={this.props.addToGarden}/>
          })}
      </div>
      </div>
    )
  }
}
export default Menu
