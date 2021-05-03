// SPDX-License-Identifier: Apache-2.0

import TripleTiles from "../layouts/TripleTiles";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Box() {
  return <Container className="DebugContainer">DebugContainer</Container>;
}

function Buttons() {
  return (
    <Container>
      <Button>Button_01</Button>
      <Button>Button_02</Button>
      <Button>Button_03</Button>
    </Container>
  );
}

function Mint() {
  return (
    <Container className="Mint">
      <TripleTiles lt={Box} lb={Box} rs={Box} buttons={Buttons} />
    </Container>
  );
}

export default Mint;
