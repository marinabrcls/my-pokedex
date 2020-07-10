import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        < Pokedex />
      </div>
    )
  }
}

export default App;