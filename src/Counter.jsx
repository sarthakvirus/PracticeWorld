import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 2);
  }

  function incrementbyTwo() {
    setCount(count + 2);
  }

  function decrementbyTwo() {
    setCount(count - 2);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={incrementbyTwo}>Increment by 2</button>
      <button onClick={decrementbyTwo}>Decrement by 2</button>



      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
