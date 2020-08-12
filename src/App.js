import React from 'react';

import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import NavBar from './components/Navbar';
import Stack from './components/stack';
function App() {
  return (
    <div className="App">
    <NavBar/>
          <SortingVisualizer/>
          
    </div>
  );
}

export default App;
