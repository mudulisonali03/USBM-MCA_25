// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import {CounterContext } from './CounterContext';

const Counter = () => {
  const { state, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-4xl">Count: {state.count}</h1>
      <div className="flex gap-4 mt-4">
        <button className="bg-black text-white py-2 px-4 rounded" onClick={increment}>
          Increment
        </button>
        <button className="bg-slate-500 text-white py-2 px-4 rounded" onClick={decrement}>
          Decrement
        </button>
        <button className="bg-blue-400 text-white py-2 px-4 rounded" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
