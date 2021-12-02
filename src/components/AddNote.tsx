import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { NoteModel } from '../models/notes.model';

interface AddNoteProps {
    allNotes: NoteModel[],
    setAllNotes: React.Dispatch<React.SetStateAction<NoteModel[]>>
}

const AddNote: React.FC<AddNoteProps> = ({ setAllNotes, allNotes }) => {

    const [newNote, setNewNote] = useState<string>('');

    const addNote = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (!newNote) {
            return;
        }

        const newNoteData: NoteModel = {
            id: Date.now(),
            note: newNote,
            date: (new Date).toString()
        }
        setAllNotes([newNoteData, ...allNotes]);
        setNewNote('');
    }

    return (
        <div>
            <Form onSubmit={addNote}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter Note"
                        value={newNote}
                        onChange={(event) => setNewNote(event.target.value)}
                    />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddNote;