import { useState } from 'react'
import Header from './components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'
import { NoteModel } from './models/notes.model'

const App = () => {

    const [allNotes, setAllNotes] = useState<NoteModel[]>([{
        id: Date.now(),
        note: 'Learn TS',
        date: (new Date).toString()
    }])

    return (
        <>
            <Header />
            <Container className="mt-5">
                <br />
                <Row>
                    <Col>
                        <AddNote

                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <NotesList
                            allNotes={allNotes}
                            setAllNotes={setAllNotes}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;