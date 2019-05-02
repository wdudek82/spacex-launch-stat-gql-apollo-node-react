import React from 'react';
import './App.css';
import logo from './assets/img/spacex_logo.png';

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="SpaceX logo"
        style={{ display: 'block', width: '300px', margin: 'auto' }}
      />
    </div>
  );
}

export default App;
