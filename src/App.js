import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import './bootstrap.css';
//app "root" component imported into src/index.js
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*embedded child components into app parent component*/}
          <LandingPage />
      </div>
    );
  }
}

export default App;
