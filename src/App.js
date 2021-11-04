import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Timer } from './features/timer/Timer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Timer/>
    </div>
  );
}

export default App;
