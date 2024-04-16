// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const AchievementProvidor = ({ children }) => {
    const [Achievement, updateAchievements] = useState({daily:[0,0,0,0,0,0,], lifeTime:[0,0,0,0,0,0]});

    return (
        <MyContext.Provider value={{ Achievement, updateAchievements }}>
            {children}
        </MyContext.Provider>
    );
};

export const useAchievementContext = () => useContext(MyContext);
