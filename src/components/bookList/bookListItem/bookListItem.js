import React from "react";
import BookEditor from '../../bookEditor/bookEditor';
import {Button, Card, Grid} from 'semantic-ui-react';

const BookListItem = ({book, editName, editDescription}) => {

    return (
        <Card fluid color='blue'>
            <Grid textAlign="center" >
                <Grid.Row>
                    <Grid.Column width={11}>
                        <BookEditor 
                            book={book} 
                            triggerElement={<h1>{book.name}</h1>}
                            editName={editName}
                            editDescription={editDescription}    
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <BookEditor 
                            book={book} 
                            triggerElement={<Button fluid color="blue">EDIT</Button>}
                            editName={editName}
                            editDescription={editDescription}  
                            editable={true}  
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card>
    );
}

const styles = {
    paddingLeft: '10px'
}

export default BookListItem;
