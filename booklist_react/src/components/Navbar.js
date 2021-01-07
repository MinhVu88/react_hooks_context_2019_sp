import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export default function Navbar() {
    const {books} = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>My Reading List</h1>
            <p>The current number of books: {books.length} books</p>
        </div>
    );
};
