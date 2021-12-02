import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface Props {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const AddNote: React.FC<Props> = ({ notes, setNotes }) => {

    const [noteData, setNoteData] = useState<string>('')

    const addNoteHandler = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const newNote: Note = {
            id: Date.now(),
            title: '',
            text: noteData,
            color: '#dfdfdf',
            date: (new Date).toString()
        }
        setNotes([newNote, ...notes]);

        setNoteData('');
    }

    return (
        <div>
            <Form onSubmit={addNoteHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter Note"
                        value={noteData}
                        onChange={(event) => setNoteData(event.target.value)}
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