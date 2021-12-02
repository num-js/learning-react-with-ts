import { useState } from 'react'
import { Note } from './models/note.model'
import Header from './components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'

const App = () => {

    const [notes, setNotes] = useState<Note[]>([
        {
            id: Date.now(),
            title: "Meetings",
            text: "Meeting with Design Team",
            color: "#dfdfdf",
            date: (new Date).toString()
        }
    ])

    return (
        <>
            <Header />
            <Container className="mt-5">
                <br />
                <Row>
                    <Col>
                        <AddNote
                            notes={notes}
                            setNotes={setNotes}
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <NotesList
                            notes={notes}
                            setNotes={setNotes}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;