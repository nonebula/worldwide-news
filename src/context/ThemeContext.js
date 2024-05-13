import React from 'react';


const ThemeContext = React.createContext();

export const ThemeProvider= ({ children }) => {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}