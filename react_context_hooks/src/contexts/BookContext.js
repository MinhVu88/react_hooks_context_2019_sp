import React, {createContext, useState} from 'react';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([{id: 1, title: 'Dune'},
                                        {id: 2, title: 'Dracula'},
                                        {id: 3, title: 'Frankenstein'},
                                        {id: 4, title: 'Sherlock Holmes'}
                                       ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
};
