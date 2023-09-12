import React,{useState} from 'react'
import NewNote from './NewNote'
import Button from '../components/Button'
import {v4 as uuidv4} from 'uuid'

export default function NotesApp() {

    const [notes, setNotes] = useState([])

    const addNewNote = (newNote) => {
        const NewNotes = [...notes, newNote];
        NewNotes.filter((note) => !note.id && (note.id = uuidv4()));
        setNotes(NewNotes)
    }

    const deleteNote = (id) => {
        setNotes(notes.filter((note)=> note.id !== id))
    }
    
    return (
        <div className='container'>
            <Button text={'+ New Note'} onClick={addNewNote}/>
            <div 
                className='container container-sm- d-flex' 
                style={{gap: 25, flexWrap:'wrap'}}
            >
            {notes.map((note) => (
                <NewNote note={note} key={note.id} onClick={deleteNote}/>
            ))}
            </div>
        </div>
    )
};