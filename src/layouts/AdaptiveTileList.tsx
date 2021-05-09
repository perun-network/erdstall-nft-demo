// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface props {
  nfts: Array<JSX.Element>;
}

function AdaptiveTileList(props: props) {
  return (
    <Container className="AdaptiveTileList" fluid>
      <Row className="AdaptiveTileListRow">
        {props.nfts.length === 0 ? (
          <Container className="EmptyNFTList">
            <h1>No NFTs exist yet.</h1>
          </Container>
        ) : (
          props.nfts
        )}
      </Row>
    </Container>
  );
}

export default AdaptiveTileList;
