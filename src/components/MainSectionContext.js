// MainSectionContext.js
import React, { createContext, useContext, useRef } from 'react';

// Create a Context for the MainSection method
const MainSectionContext = createContext(null);

export const useMainSection = () => useContext(MainSectionContext);

export const MainSectionProvider = ({ children }) => {
    const mainSectionRef = useRef();

    const triggerEndCall = () => {
        if (mainSectionRef.current) {
            mainSectionRef.current.endCall();
        }
    };

    return (
        <MainSectionContext.Provider value={{ mainSectionRef, triggerEndCall }}>
            {children}
        </MainSectionContext.Provider>
    );
};
