// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const AccountProvidor = ({ children }) => {
    const [accountInfo, updateAccountInfo] = useState({UserName: "jeremy", style:"", CurrentSong:"" });

    return (
        <MyContext.Provider value={{ accountInfo, updateAccountInfo }}>
            {children}
        </MyContext.Provider>
    );
};

export const useAccountContext = () => useContext(MyContext);
