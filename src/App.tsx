import { useState } from 'react'
import Header from './components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'

const App = () => {

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

                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;