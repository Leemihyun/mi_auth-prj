import React, {useEffect} from 'react';
import {Container, Nav, Navbar, NavDropdown, Row, Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import useFetchProfile from "../services/FetchProfile";

const Header = () => {
    const token = localStorage.getItem('token');
    const {data: userInfo, isLoading } = useFetchProfile(token);

    if ( isLoading) {
        return (
            <Container>
                <Row className={"justify-content-md-center"} >
                    <Spinner animation="border" role={"status"}>
                        <span> Loading ...</span>
                    </Spinner>
                </Row>
            </Container>
        );
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
            <Container>
                <Navbar.Brand href="/">mi-prj</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Movies</Nav.Link>
                        <Nav.Link href='/tvshow'>TvShow</Nav.Link>
                        <Nav.Link href='/news'>News</Nav.Link>
                        <Nav.Link href='/people'>People</Nav.Link>
                        <Nav.Link href='/cats'>Cats</Nav.Link>


                    </Nav>
                    <Nav>
                        {userInfo
                            ? (
                                <NavDropdown title={userInfo.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">logOut</NavDropdown.Item>
                            </NavDropdown>
                            ) : (
                            <>
                                <Nav.Link href='/login'>LogIn</Nav.Link>
                                <Nav.Link href='/signup'>SignUp</Nav.Link>
                            </>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;