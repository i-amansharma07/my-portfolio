import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from 'next-themes';


const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(true);


    useEffect(() => {
        if(!localStorage.getItem("theme")) localStorage.setItem("theme", "dark")
            setIsDarkMode(localStorage.getItem("theme") === "dark" ? true : false)
    }, [])


    function changeTheme(){
        const isCurrentThemeDark = theme === "dark" ? true : false;
        setIsDarkMode(!isCurrentThemeDark);
        setTheme(isCurrentThemeDark ? 'light' : 'dark');
    }

    return <label className="inline-flex items-center cursor-pointer">
    <Sun  size={20}/>
        <input type="checkbox" checked={isDarkMode} onChange={changeTheme} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 mx-2"></div>
        <Moon size={20}/>
    </label>
}


export default ThemeSwitch;
