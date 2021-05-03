// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Onboarding() {
  return (
    <Container className="d-flex justify-content-center Onboarding" fluid>
      <Row className="my-auto">
        <Button>Connect to MetaMask</Button>
      </Row>
    </Container>
  );
}

export default Onboarding;
