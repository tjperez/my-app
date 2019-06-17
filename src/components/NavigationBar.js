import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;
//
//     &:hover {
//       color: white;
//     }
//   }
// `;

export const NavigationBar = () => (
  <Styles>
  <div>
  <ul id="nav">
    // <Navbar expand="lg">
    //   <Navbar.Brand href="/">TJ Campus</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //         <Nav.Item>
    //             <Nav.Link>
                    <Link to="/">Home</Link>
            //     </Nav.Link>
            // </Nav.Item>
            // <Nav.Item>
            //     <Nav.Link>
                    <Link to="/campus">Campus</Link>
            //     </Nav.Link>
            // </Nav.Item>
            // <Nav.Item>
            //     <Nav.Link>
                    <Link to="/student">Student</Link>
    //             </Nav.Link>
    //         </Nav.Item>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    </ul>
    </div>
  </Styles>
)
