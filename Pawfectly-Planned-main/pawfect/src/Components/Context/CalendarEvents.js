// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const CalendarProvidor = ({ children }) => {
    const [Events, UpdateEvents] = useState([]);

    return (
        <MyContext.Provider value={{ Events, UpdateEvents }}>
            {children}
        </MyContext.Provider>
    );
};

export const useCalendarContext = () => useContext(MyContext);
