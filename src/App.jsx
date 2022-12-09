import React from "react";
import{ createContext, useState } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div id={theme}>
        <div className="switch" >
            <label className="label_switch">{theme ==="light" ? "Light Mode" : "Dark Mode"}</label>
    <ReactSwitch onChange={toggleTheme} onColor="#09aab3" checked={theme ==="dark"}/>
    </div>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    </ThemeContext.Provider>
    )
}

export default App