// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface props {
  t: () => JSX.Element;
  b: () => JSX.Element;
  buttons: () => JSX.Element;
}

function DoubleTiles(props: props) {
  return (
    <Container className="DoubleTiles justify-content-center" fluid>
      <Row>
        <Col className="mt-2" lg={12}>
          {props.t()}
        </Col>
        <Col className="mt-2" lg={12}>
          {props.b()}
        </Col>
      </Row>
      <Row className="mt-2">{props.buttons()}</Row>
    </Container>
  );
}

export default DoubleTiles;
