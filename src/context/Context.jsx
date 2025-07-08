import React, { useReducer, createContext, useEffect } from 'react';
import reducer, { initialState } from '../reducers/reducer.jsx';

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;