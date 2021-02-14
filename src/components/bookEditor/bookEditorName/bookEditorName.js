import React, {useState} from "react";

import {Input} from 'semantic-ui-react';

const BookEditorName = ({name, id, editName, editable}) => {
    const [value, setValue] = useState(name)

    return (
        editable 
            ?
            <Input 
                value={value}
                onChange={(event) => 
                { 
                    editName(event, id, event.target.value) ;
                    setValue(event.target.value);
                }} 
            />
            :
            <h1>{name}</h1>
    );
}

export default BookEditorName;
