import React, { useState } from "react";
import {TextArea, Form} from 'semantic-ui-react';

const BookEditorDescription = ({description, id, editDescription, editable}) => {
    const [value, setValue] = useState(description)

    return (
        editable 
            ?
            (<Form>
                <TextArea 
                    row={4}
                    value={value}
                    onChange={(event) => 
                    { 
                        editDescription(event, id, event.target.value) ;
                        setValue(event.target.value);
                    }} 
                />
            </Form>)
            :
            <div>{description}</div>
    );
}
export default BookEditorDescription;
