// eslint-disable-next-line no-unused-vars
import React, {createContext, useReducer } from 'react';

const CounterContext = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <CounterContext.Provider value={{ state, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext};
