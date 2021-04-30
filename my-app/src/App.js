import React, {useReducer} from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Cold from './components/Cold';
import Hot from './components/Hot';
import Clear from './components/Clear';
import Cloudy from './components/Cloudy';
import Rainy from './components/Rainy';
import Snowy from './components/Snowy';

function App() {
  
  const [currentState, dispatch] = useReducer(reducer, state);
  
    return (
    <div className="App">
      <header className="App-header">
       <Cold state={currentState} dispatch={dispatch}/>
       <Hot state={currentState} dispatch={dispatch}/>
       <Clear state={currentState} dispatch={dispatch}/>
       <Cloudy state={currentState} dispatch={dispatch}/>
       <Rainy state={currentState} dispatch={dispatch}/>
       <Snowy state={currentState} dispatch={dispatch}/>


      </header>
    </div>
  );
}

export default App;
