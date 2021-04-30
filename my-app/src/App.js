import React, {useReducer} from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import Cold from './components/Cold';
import Hot from './components/Hot'

function App() {
  
  const [currentState, dispatch] = useReducer(reducer, state);
  
    return (
    <div className="App">
      <header className="App-header">
       <Cold state={currentState} dispatch={dispatch}/>
       <Hot state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}

export default App;
