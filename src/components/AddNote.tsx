import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';


const AddNote: React.FC = () => {

    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter Note"

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