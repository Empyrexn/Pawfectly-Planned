// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const BackgroundProvidor = ({ children }) => {
    const [background, updateBackground] = useState({ProfilePic:1, backgroundImage:1, backgroundColor:1, points:1 }); // expand here for more customization opens ie bg1 bg2 for background and wall

    return (
        <MyContext.Provider value={{ background, updateBackground }}>
            {children}
        </MyContext.Provider>
    );
};

export const useBackgroundContext = () => useContext(MyContext);
