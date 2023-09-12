import React, { useState } from 'react'
import Blog from './Blog'
import { ThemeContext,themes } from './context/theme-context';

function LightAndDarkMode() {

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(){
        theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
        console.log(theme)
        
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <Blog/>
        </ThemeContext.Provider>
    )
};


export default LightAndDarkMode;
