import React, {useState} from "react";
import {Navbar, Nav, Offcanvas, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };
    return (
        <div className="header-section fixed-top">
            <Fade top>
                <div className="container">
                    <div className="row">
                        <Navbar className="" expand="lg"
                            expanded={expanded}>
                            <Navbar.Brand as={Link}
                                to="/"
                                onClick={handleLinkClick}>
                                <div className="navbar_brand">Showkat
                                    <span className="ps-2">
                                        Ali</span>
                                </div>
                            </Navbar.Brand>
                            <Button variant="dark" className="d-block d-lg-none me-3"
                                onClick={handleNavbarToggle}>
                                <i class="fa-solid fa-bars"></i>
                            </Button>
                            <Navbar.Collapse>
                                <Nav className="ms-auto nav_bg_color d-none d-lg-flex d-lg-inline-block">
                                    <Nav.Link as={Link}
                                        to="/"
                                        onClick={handleLinkClick}>
                                        HOME
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/about"
                                        onClick={handleLinkClick}>
                                        ABOUT
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/skills"
                                        onClick={handleLinkClick}>
                                        SKILLS
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/projects"
                                        onClick={handleLinkClick}>
                                        PROJECTS
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/contact"
                                        onClick={handleLinkClick}>
                                        CONTACT
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Offcanvas show={expanded}
                            className="off_canvas w-75"
                            onHide={
                                () => setExpanded(false)
                        }>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <div className="offcanvas_brand">Showkat
                                        <span className="ps-2">
                                            Ali</span>
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-column">
                                    <Nav.Link as={Link}
                                        to="/"
                                        onClick={handleLinkClick}>
                                        HOME
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/about"
                                        onClick={handleLinkClick}>
                                        ABOUT
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/skills"
                                        onClick={handleLinkClick}>
                                        SKILLS
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/projects"
                                        onClick={handleLinkClick}>
                                        PROJECTS
                                    </Nav.Link>
                                    <Nav.Link as={Link}
                                        to="/contact"
                                        onClick={handleLinkClick}>
                                        CONTACT
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
