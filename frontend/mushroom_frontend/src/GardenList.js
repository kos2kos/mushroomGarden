import React, { Component } from 'react';
import Garden from './Garden'
import Menu from './Menu'
import User from './User'

class GardenList extends Component {
  constructor() {
    super()
    this.state = {
      gardens: [],
      mushrooms: [],
      counter: 0,
      mounted: false
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(res => res.json())
      .then(allGardens =>{
        this.setState({
          gardens: allGardens.gardens,
          mushrooms: allGardens.gardens[0].mushrooms,
          mounted: true
        })
      })
  }

  increaseCounter = () => {
    console.log("count Outside ifelse: ",this.state.counter);
    let count = parseInt(this.state.counter) + 1
    if(count > this.state.gardens.length - 1){
      count = 0
      this.setState({counter: count})
    } else{
      this.setState({counter: count})
    }
  }



  decreaseCounter = () =>{
    let count = parseInt(this.state.counter) - 1
    console.log("mounted state", this.state.mounted);
    console.log("garden length", this.state.counter);
    if(count < 0){
      count = this.state.mushrooms.length - 1
      this.setState({counter: count})
    } else{
      this.setState({counter: count})
    }
  }

  showGarden = () => {
    return this.state.gardens[this.state.counter]
  }

  showMushrooms = () => {
    if (this.state.counter != 0 || this.state.mounted){
      return this.state.gardens[this.state.counter].mushrooms
    }
    return this.state.mushrooms
  }

  findAndReplace = (newGarden) => {
    console.log("New Garden b4 State: ", newGarden);
    let filterGarden = this.state.gardens.map(garden => {
      if (garden.id === newGarden.id){
        return newGarden
      } else {
        return garden
      }
    })
    this.setState({gardens: filterGarden})
  }

  addToGarden = (mushroom) => {

    let counter = this.state.counter
    let garden = this.state.gardens[counter].mushrooms
    let id = this.state.gardens[counter].id
    if (garden.length  < 125 ){
      fetch(`http://localhost:3000/gardens/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(
          {mushrooms: [...garden, mushroom]}
        ),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(garden => {
        console.log(garden);
        this.findAndReplace(garden)
      })
    }
  }

  render(){
    const {counter} = this.state
    console.log("this is the state! ", this.state);
    return(
      <div>
        <User amount={0}/>

        <h2>GardenList</h2>
        {this.state.gardens.length === 0 || this.state.mushrooms.length === 0 ? null : <Garden key={Math.floor(Math.random() * Math.floor(7026842189)) } displayedGarden={this.showGarden()} mushrooms={this.showMushrooms()}/>}
        <button onClick={this.decreaseCounter}> Previous</button>
        <button onClick={this.increaseCounter}> Next</button>
        <Menu id={1} addToGarden={this.addToGarden}/>
      </div>
    )
  }
}
export default GardenList
