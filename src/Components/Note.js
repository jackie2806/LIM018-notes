import React from 'react';
import {NoteButtonDelete} from './NoteButtonDelete';
import {NoteButtonEdit} from './NoteButtonEdit'

function Note(){
    return(
        <React.Fragment>
             <input placeholder="Mi primer texto"></input>
        <NoteButtonDelete/>
        <NoteButtonEdit/>
        </React.Fragment>      
    
    )
}
export {Note};