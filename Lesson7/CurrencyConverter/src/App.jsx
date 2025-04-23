import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(
    () => {
      console.log('page is loaded');
    }
  );

  //  const clicktHandler = function() {

  const selectHandler = function(e) {
    console.log(e.target.value);

  }

  return (
    <>
      <h1>Currency Converter</h1>
      {/* <button 
        onClick={clickHandler}>
        
        Click me
      </button> */}
      <p>
        I want to convert {" "}
        <select name = "currency" id="currencySelect" onChange={selectHandler}>
          <option value="USD">United States Dollar</option>
          <option value="JapaneseYen">JPY</option>
          <option value="sgd">SGD</option>
          <option value="myr">MYR</option>
          </select>{" "}
      </p>
    </>
  )
}

export default App;
