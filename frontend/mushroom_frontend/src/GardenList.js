import React, { Component } from 'react';
import Garden from './Garden'

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
    console.log(this.state.gardens[this.state.counter]);
    return this.state.gardens[this.state.counter]
  }

  showMushrooms = () => {
    if (this.state.counter != 0 || this.state.mounted){
      return this.state.gardens[this.state.counter].mushrooms
    }
    return this.state.mushrooms
  }

  render(){
    console.log(this.showMushrooms());
    const {counter} = this.state
    return(
      <div>
        <h1>GardenList</h1>
        {this.state.gardens.length === 0 || this.state.mushrooms.length === 0 ? null : <Garden displayedGarden={this.showGarden()} mushrooms={this.showMushrooms()}/>}
        <button onClick={this.decreaseCounter}> Previous</button>
        <button onClick={this.increaseCounter}> Next</button>

      </div>
    )
  }
}
export default GardenList
