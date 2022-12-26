import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoems from "../assets/logoems.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logoems} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                            >
                            <i class="fas fa-home"></i>Home
                        </NavLink>
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/signin"
                            >
                            <i class="fas fa-sign-in-alt"></i>Sign in
                        </NavLink>
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/signup"
                            >
                            <i class="fas fa-user-plus"></i>Sign up
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavBar;