import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NoteModel } from '../models/notes.model';

interface NotesProps {
    note: NoteModel,
    deleteNote: (id: number) => void
}

const Notes: React.FunctionComponent<NotesProps> = ({ note, deleteNote }) => {

    return (
        <>
            <div className="mb-3">
                <Card style={{
                    backgroundColor: "#dfdfdf"
                }}>
                    <Card.Body>
                        <Card.Title>
                            {note.note}
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                            {note.date}
                        </Card.Subtitle>

                        <Button className="mt-3" variant="danger"
                            onClick={() => deleteNote(note.id)}
                        >
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Notes;