import React from "react";
import BookListItem from './bookListItem/bookListItem';
import {Card} from 'semantic-ui-react';

const BookEditor = ({books, editName, editDescription}) => {

    return (
        <Card.Group>
            {books.map(book => <BookListItem 
                                    key={book._id} 
                                    book={book} 
                                    editName={editName}
                                    editDescription={editDescription}
                                />)
            }
        </Card.Group>
    );
}

export default BookEditor;
