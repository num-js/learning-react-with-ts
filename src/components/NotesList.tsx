import React from 'react';
import { NoteModel } from '../models/notes.model';
import Notes from './Notes';

interface NotesListProps {
    allNotes: NoteModel[],
    setAllNotes: React.Dispatch<React.SetStateAction<NoteModel[]>>
}

const NotesList: React.FC<NotesListProps> = ({ allNotes, setAllNotes }) => {

    const deleteNote = (id: number) => {
        setAllNotes(allNotes.filter(note => note.id !== id));
    }

    return (
        <>
            <h2 className="mt-3">All Notes</h2>
            <div>
                {
                    allNotes && allNotes?.map(note => (
                        <Notes
                            key={note.id}
                            note={note}
                            deleteNote={deleteNote}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default NotesList;
