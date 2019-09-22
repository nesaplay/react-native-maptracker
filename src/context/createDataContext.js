import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const enhancedActions = {};

    for (key in actions) {
      enhancedActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...enhancedActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
