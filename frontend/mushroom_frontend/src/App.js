
import React, { Component } from 'react';
import GardenList from './GardenList'
import Menu from './Menu'
import User from './User'


class App extends Component {
  render() {
    return (
      <div className="App">
        <GardenList />
        <User />

      </div>
    );
  }
}

export default App;
