import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([{id: 1, title: 'Animal Farm', author: 'George Orwell'},
                                        {id: 2, title: 'Fahrenheit 451', author: 'Ray Bradbury'}
                                       ]);

    const addBook = (title, author) => {setBooks([...books, {title, author, id: uuidv4()}]);};

    const removeBook = removed_id => {setBooks(books.filter(book => book.id !== removed_id))};

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
};
