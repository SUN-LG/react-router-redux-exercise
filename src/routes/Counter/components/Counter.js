import React from 'react'

export const Counter = ({counter, increment, doubleAsync}) => (
  <div>
    <h2>Counter: {counter}</h2>
    <button className="btn btn-default" onClick={increment}>Increment</button>
    {' . '}
    <button className="btn btn-default" onClick={doubleAsync}>Double(Async)</button>
  </div>
)

export default Counter
