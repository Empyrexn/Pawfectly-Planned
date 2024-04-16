// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const StoreArrayProvider = ({ children }) => {
    const [storeArray, updateStoreArray] = useState({backgroundArray: [0,0,0,0,0,0,1], ColorArray: [0,0,0,0,0,0,1], ProfilePicArray: [0,0,0,0,0,0,1],});

    return (
        <MyContext.Provider value={{ storeArray, updateStoreArray }}>
            {children}
        </MyContext.Provider>
    );
};

export const useStoreContext = () => useContext(MyContext);
