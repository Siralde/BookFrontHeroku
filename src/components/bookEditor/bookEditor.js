import React, { useState } from "react";
import BookEditorName from './bookEditorName/bookEditorName';
import BookEditorDescription from './bookEditorDescription/bookEditorDescription';
import { Header, Modal } from 'semantic-ui-react';


const BookEditor = ({book, editName, editDescription, triggerElement, editable}) => {

    const [open, setOpen] = useState(false)

    return (          
        <Modal
            closeIcon
            open={open}
            trigger={triggerElement}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            centered={false}
            size={"large"}
        >

            <Header>
                <BookEditorName 
                    name={book.name} 
                    id={book._id} 
                    editName={editName}
                    editable={editable}
                /> 
            </Header> 

            <Modal.Content>
                <BookEditorDescription 
                    description={book.description} 
                    id={book._id} 
                    editDescription={editDescription}
                    editable={editable}
                />
            </Modal.Content>

        </Modal>
    );
}

export default BookEditor;

