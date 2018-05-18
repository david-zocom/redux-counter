import React, { Component } from 'react';
import Counter from './components/Counter.js';
import Animals from './components/Animals.js';
import FetchTheWorld from './components/FetchTheWorld.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	  	Hello Redux!
		<Counter />
		<Animals />
		<FetchTheWorld />
      </div>
    );
  }
}

export default App;
