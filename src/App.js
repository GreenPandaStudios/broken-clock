import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Timer } from './features/timer/Timer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Quotes } from './features/Quotes/Quotes';

function App() {
  return (
    <div class = "container">
     
      <div class = "row">
        <Timer/>
      </div>
      <Quotes/>
    </div>
  );
}

export default App;
