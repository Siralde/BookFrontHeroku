import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {Segment, Loader, Container} from 'semantic-ui-react';
import BookList from '../components/bookList/bookList';

const ENDPOINT = "http://books-back-inter.herokuapp.com";
let socket;

const BookPage = () => {

    const [books, setBooks] = useState([]);
    const [fetching, setFetching] = useState();
    const [error, setError] = useState('');

    /*
     * This hooks is for connecting to the server and asking for data
     */
    useEffect(() => {
        socket = io(ENDPOINT);
        console.log(socket, ENDPOINT);
        if(socket == undefined)
        {
            setError('Error connecting to the Server');
        }
        socket.emit('books', (error) => {
            if(error) { 
                setError('Error fetching data from the Server');
            }
        });
    }, [ENDPOINT]);

    /*
     * This hook is for geting data
     */
    useEffect(() => {
        setFetching(true);
        socket.on('bookList', booklist => setBooks(booklist));
        setFetching(false);
    });

    /** 
     * @func findIndex
     * 
     * Find a index of a item in an array
     * 
     * @param id Identifier of the item
     * 
     * @return index of the item in the array
     */
    const findIndex = (id) =>{
        let index = -1;
        books.some((book) => {
            if (book._id === id) 
            {
                index = books.indexOf(book);
                return true;
            }
            else 
            {
                return false;
            }
        });
        return index;
    }

    const editName = (event, _id, newName) => {
        event.preventDefault();
        socket.emit('changeName', {
            _id,
            newName
        })
        let index = findIndex(_id);
        books[index].name = newName;
        setBooks([...books]); 
    };

    const editDescription = (event, _id, newDescription) => {
        event.preventDefault();
        socket.emit('changeDescription', {
            _id,
            newDescription
        })
        let index = findIndex(_id);
        books[index].description = newDescription;
        setBooks([...books]);
    }

    return (
        <Container style={styles}>
            <Segment textAlign="center">
                <h1>Book Editor Page with WebSocket by Aldemaro González</h1>
            </Segment>
            <Segment>
            {error
                ?
                <div>
                    {error}
                    Try Reloading the Page
                </div>
                :
                fetching 
                    ? 
                    <Loader>Fetching Data from Server</Loader>
                    :
                    <BookList 
                        books={books} 
                        editName={editName} 
                        editDescription={editDescription}
                    />
            }
            </Segment>
        </Container>
    );
}

const styles = {
    marginTop: '20px'
}

export default BookPage;
