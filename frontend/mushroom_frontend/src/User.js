import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0,
      username: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(res =>res.json())
      .then(user => this.setState({
        amount: user.amount,
        username: user.username
      }))
  }
  render(){
  return(
      <div>
        <h2>{"Username: " + this.state.username}</h2>
        <h2>{"$$$:  " + this.state.amount}</h2>
      </div>
    )
  }
}

export default User
