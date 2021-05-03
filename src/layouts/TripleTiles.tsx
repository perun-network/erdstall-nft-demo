// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface props {
  lt: () => JSX.Element;
  lb: () => JSX.Element;
  rs: () => JSX.Element;
  buttons: () => JSX.Element;
}

function TripleTiles(props: props) {
  return (
    <Container className="TripleTiles justify-content-center" fluid>
      <Row className="mt-2">
        <Col className="mt-2 p-0" md={6}>
          <Col lg={12}>{props.lt()}</Col>
          <Col className="mt-2" lg={12}>
            {props.lb()}
          </Col>
        </Col>
        <Col className="mt-2" md={6}>
          {props.rs()}
        </Col>
      </Row>
      <Row className="mt-2">{props.buttons()}</Row>
    </Container>
  );
}

export default TripleTiles;
