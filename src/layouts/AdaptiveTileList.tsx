// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface props {
  nfts: Array<JSX.Element>;
}

function AdaptiveTileList(props: props) {
  return (
    <Container className="AdaptiveTileList" fluid>
      <Row className="AdaptiveTileListRow">{props.nfts}</Row>
    </Container>
  );
}

export default AdaptiveTileList;
