//create useEffect for on page change to update timer context, need to confirm timer play first
// needs to decide when to send information to server
import React, { createContext, useState, useContext } from 'react';

const timerValue = createContext();

export const TimerProvider = ({ children }) => {
    const [currTimer, updateCurrTImer] = useState(1); // Initialize currPage to 1

    return (
        <timerValue.Provider value={{ currTimer, updateCurrTImer }}>
            {children}
        </timerValue.Provider>
    );
};

export const useTimerContext = () => useContext(timerValue);
