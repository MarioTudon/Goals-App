import React, { useReducer, createContext } from 'react';
import reducer, { initialState } from '../reducers/reducer.jsx';
import goalsList from '../services/goalsList.jsx';
import { Routes } from 'react-router';

export const Context = createContext(null);
const goals = reducer(initialState, { type: 'read', goals: goalsList });

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, goals);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;