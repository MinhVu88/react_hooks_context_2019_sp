import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthenticationContext';

export default class Navbar extends Component {
    // using context inside a component | the 1st approach: contextType (only for class-based components)
    // static contextType = ThemeContext; 

    render() {
        // console.log(this.context);

        // const {isLightTheme, light_theme, dark_theme} = this.context;

        // const theme = isLightTheme ? light_theme : dark_theme;

        return (
            // using context inside a component | the 2nd approach: Consumer (for class-based & functional components)
            // another benefit of using this approach is multiple contexts can be consumed within a component
            <AuthContext.Consumer>{authContext => (
                <ThemeContext.Consumer>{themeContext => {
                    const {isAuthenticated, toggleAuth} = authContext;

                    const {isLightTheme, light_theme, dark_theme} = themeContext;

                    const theme = isLightTheme ? light_theme : dark_theme;
                    
                    return(
                        <nav style={{background: theme.background, color: theme.text}}>
                            <h1>React Context API</h1>
                            <div onClick={toggleAuth}>{isAuthenticated ? 'Logged In' : 'Logged Out'}</div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>           
        );
    };
};