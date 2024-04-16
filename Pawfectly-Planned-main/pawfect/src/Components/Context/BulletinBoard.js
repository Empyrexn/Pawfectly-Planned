// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const BoardProvider = ({ children }) => {
    const [notes, updateNotes] = useState([]);

    return (
        <MyContext.Provider value={{ notes, updateNotes }}>
            {children}
        </MyContext.Provider>
    );
};

export const useNoteContext = () => useContext(MyContext);
