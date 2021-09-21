import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Routes from './routes';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes />
    </React.Fragment>
  );
}

export default App;
