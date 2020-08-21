import React, { useState } from 'react';
import './App.css';

//This is happening behind the scenes with React
// function App() {
//   return (
//     React.createElement(
//       'h1',
//       [],
//       React.createElement('h1', [], 'New element child'))
//   );
// }
//COUNT IS STATE,

function App() {
  //let count = 0; //THIS IS STATE, but we want this dynamic
  //USE STATE is a METHOD, one ARGUEMENT
  let [count, setCount] = useState(0) //you can put any initial data type rn = 0
  //console.log(count);
  //[current value of state, function to change state]

  //const count = state[0] STATE HAS 2 ARGUEMENTS
  //const setCount = state[2] STATE HAS 2 ARGUEMENTS
  //STATE component is currently in, will ALWAYS have 2 items
  //HOOKs are new,  this is a helper method, useState
  let name = 'Ali';

  return (
    <div className="counter">
      <h2>{name}'s Counter</h2>
      <p className="click_desc">
        The total is currently <span>{count}</span>
      </p>
      <div className="button_container">
        <button
          onClick={ () => {
            console.log("Clicked");
            setCount(count++);
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            console.log("multiply");
            setCount(count * 5);
        }}
        >
          Multiply 5
        </button>
        <button
          onClick={() => {
            setCount(0);
        }}
        >
          Reset
        </button>
      </div>
      <h1 id="big_total">{count}</h1>
    </div>

  );
}

export default App;

/*
  SPREAD operator
  Destructure Array

  let arr = ["a", "b", "c"]
  arr = ["a", "b", "c"]

  let firstPerson = arr[0]
  firstPerson = "a"

  let [firstPerson, secondPerson, me ] = arr;
  DESTRUCTURING




  */
