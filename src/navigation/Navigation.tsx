// SPDX-License-Identifier: Apache-2.0

import { LinkContainer } from "react-router-bootstrap";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

interface props {
  onboarded: boolean;
}

function Navigation(props: props) {
  return (
    <NavBar
      className="Navigation"
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <NavBar.Brand>
        <div className="NERDLogo" />
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="responsive-navbar-nav" />
      <NavBar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <LinkContainer
            className="navbar-item"
            activeClassName="navbar-current"
            to="/me/home"
          >
            <Nav.Link disabled={!props.onboarded}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer
            className="navbar-item"
            activeClassName="navbar-current"
            to="/me/nfts"
          >
            <Nav.Link disabled={!props.onboarded}>MyNFTs</Nav.Link>
          </LinkContainer>
          <LinkContainer
            className="navbar-item"
            activeClassName="navbar-current"
            to="/me/mint"
          >
            <Nav.Link disabled={!props.onboarded}>Mint</Nav.Link>
          </LinkContainer>
          <Nav.Link
            target="_blank"
            href="https://polycry.pt"
            rel="noreferrer"
            disabled={!props.onboarded}
          >
            Contact
          </Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}

export default Navigation;
