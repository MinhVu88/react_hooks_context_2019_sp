import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {BookContext} from '../contexts/BookContext';

export default function BookList() {
    const {isLightTheme, light_theme, dark_theme} = useContext(ThemeContext);

    const theme = isLightTheme ? light_theme : dark_theme;

    const {books} = useContext(BookContext);

    return (
        <div className='book-list' style={{color: theme.text, background: theme.background}}>
            <ul>
                {books.map(book => (<li style={{background: theme.other_ui}} key={book.id}>{book.title}</li>))}
            </ul>
        </div>
    );
};
