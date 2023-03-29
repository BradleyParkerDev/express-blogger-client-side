import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = (props) => {
    const auth = useAuth();
    let expand = false;

    function ShowLogoutButton(){
        return(
                <button onClick={()=>{
                    auth.logout()
                }}>Logout</button> 
        )

    }

    function ShowLoginRegistration(){
        return(
                <NavDropdown
                title="Login/Register"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                    <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/users/registration">Register</NavDropdown.Item>
                </NavDropdown>
        )
    }

    function LoggedIn() {
        const isLoggedIn = auth.userToken;
        if (isLoggedIn) {
          return <ShowLogoutButton/>;
        }
        return <ShowLoginRegistration/>;
    }


    return (
        // <div id="navBar">
        //     <h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
        //     <Link to="/">Home</Link>
        //     <Link to="/create-one">Create Blog</Link>
        //     <Link to="/users/registration">Registration Form</Link>
		// 	<Link to="/users/login">Login Form</Link>
        //     <button onClick={()=>{
		// 		auth.logout()
		// 	}}>Logout</button>
        //     {/* <Link to="/get-one/:id">Create Blog</Link> */}

        // </div>


        <div id='navBar'>
            <Navbar id = "expressBloggerNav" key={expand} bg="white" expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Brand className="express-blogger-nav" href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="express-blogger-nav"id={`offcanvasNavbarLabel-expand-${expand}`}>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/create-one">Create Blog</Nav.Link>

                        <LoggedIn />

                    </Nav> 
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;