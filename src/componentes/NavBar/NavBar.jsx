import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import logo from '../../../public/images/logo.png'

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <img src={logo} alt="cocodrilo" />
                <Navbar.Brand href="#home">LACOSTanera</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Hombre</Nav.Link>
                    <Nav.Link href="#features">Mujer</Nav.Link>
                    <Nav.Link href="#pricing">Niños</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar
