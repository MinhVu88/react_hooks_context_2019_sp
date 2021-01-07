import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthenticationContext';

export default function Navbar() {
    const {isLightTheme, light_theme, dark_theme} = useContext(ThemeContext);

    const {isAuthenticated, toggleAuth} = useContext(AuthContext);

    const theme = isLightTheme ? light_theme : dark_theme;

    return (
        <nav style={{background: theme.background, color: theme.text}}>
            <h1>React Context Hooks</h1>
            <div onClick={toggleAuth}>{isAuthenticated ? 'Logged In' : 'Logged Out'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};