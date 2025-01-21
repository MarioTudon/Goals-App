import React, { useReducer, createContext } from 'react';
import goalsReducer, { initialState } from '../reducers/goalsReducer.jsx';

export const GoalsContext = createContext(null);

const GoalsContextProvider = ({ children }) => {
    const value = useReducer(goalsReducer, initialState);

    return (
        <GoalsContext.Provider value={value}>
            {children}
        </GoalsContext.Provider>
    );
};

export default GoalsContextProvider;