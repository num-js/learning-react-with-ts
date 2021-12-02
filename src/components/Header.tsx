import { Container, Navbar } from 'react-bootstrap';

const Header = () => {


    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        Notes | React with TS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;