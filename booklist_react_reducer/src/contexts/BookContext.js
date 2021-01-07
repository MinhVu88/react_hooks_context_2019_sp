import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const local_data = localStorage.getItem('books');

        return local_data ? JSON.parse(local_data) : [];
    });

    useEffect(() => localStorage.setItem('books', JSON.stringify(books)), [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
};
