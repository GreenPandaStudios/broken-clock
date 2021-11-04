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
       <div class = "row display-6">
        We're All Broken Clocks
      </div>
      <div class = "row">
        <Quotes/>
      </div>
    </div>
  );
}

export default App;
