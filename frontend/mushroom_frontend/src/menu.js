import React, { Component } from 'react'
import MenuCard from './MenuCard'

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
      <div>
        <h1>Menu Purchase Below</h1>

        {this.state.mushrooms.map(mshroom =>{
          return <MenuCard key={mshroom.id} mushroom={mshroom} addToGarden={this.props.addToGarden}/>
        })}
      </div>
    )
  }
}
export default Menu
