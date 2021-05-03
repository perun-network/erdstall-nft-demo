// SPDX-License-Identifier: Apache-2.0

import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

interface props {
  onboarded: boolean;
}

function Navigation(props: props) {
  return (
    <NavBar className="Navigation" bg="dark" variant="dark">
      <NavBar.Brand>cNFTs</NavBar.Brand>
      <Nav className="mr-auto">
        <Nav.Link disabled={!props.onboarded}>
          <NavLink activeClassName="navbar-current" to="/me/home">
            Home
          </NavLink>
        </Nav.Link>
        <Nav.Link disabled={!props.onboarded}>
          <NavLink activeClassName="navbar-current" to="/me/nfts">
            MyNFTs
          </NavLink>
        </Nav.Link>
        <Nav.Link disabled={!props.onboarded}>
          <NavLink activeClassName="navbar-current" to="/me/mint">
            Mint
          </NavLink>
        </Nav.Link>
        <Nav.Link disabled={!props.onboarded}>
          <NavLink activeClassName="navbar-current" to="/about">
            About
          </NavLink>
        </Nav.Link>
        <Nav.Link disabled={!props.onboarded}>
          <NavLink activeClassName="navbar-current" to="/contact">
            Contact
          </NavLink>
        </Nav.Link>
      </Nav>
    </NavBar>
  );
}

export default Navigation;
