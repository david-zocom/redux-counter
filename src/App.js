import React, { Component } from 'react';
import Counter from './components/Counter.js';
import Animals from './components/Animals.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	  	Hello Redux!
		<Counter />
		<Animals />
      </div>
    );
  }
}

export default App;
