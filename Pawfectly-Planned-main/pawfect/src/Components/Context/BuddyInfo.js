// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const BuddyProvider = ({ children }) => {
    const [buddyInfo, UpdateBuddyInfo] = useState({UserName: "jeremy", style:"", CurrentSong:"" });

    return (
        <MyContext.Provider value={{ buddyInfo, UpdateBuddyInfo }}>
            {children}
        </MyContext.Provider>
    );
};

export const useBuddyContext = () => useContext(MyContext);
