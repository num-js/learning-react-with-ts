import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Notes: React.FunctionComponent = () => {
    return (
        <>
            <div className="mb-3">
                <Card style={{
                    // backgroundColor: note.color
                }}>
                    <Card.Body>
                        <Card.Title>
                            {/* {note.title} */}AAA
                        </Card.Title>
                        <Card.Text>
                            {/* {note.text} */}
                        </Card.Text>
                        <Card.Subtitle className="text-muted">
                            {/* {note.date} */}
                        </Card.Subtitle>

                        <Button className="mt-3" variant="danger"
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