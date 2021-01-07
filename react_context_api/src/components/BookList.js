import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

export default class BookList extends Component {
    // this way of consuming a context can only be done in a class-based component
    static contextType = ThemeContext;

    render() {
        const {isLightTheme, light_theme, dark_theme} = this.context;

        const theme = isLightTheme ? light_theme : dark_theme;

        return (
            <div className='book-list' style={{color: theme.text, background: theme.background}}>
                <ul>
                    <li style={{background: theme.other_ui}}>1984</li>
                    <li style={{background: theme.other_ui}}>Dune</li>
                    <li style={{background: theme.other_ui}}>Dracula</li>
                </ul>
            </div>
        );
    };
};
