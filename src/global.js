// custom hook to access the global state from any component without having to pass it down as props

import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);