// SPDX-License-Identifier: Apache-2.0

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NFTMetaData from "../api/nftmetadata";

interface props {
  nftmetadata: NFTMetaData;
}

export default function NFTInformation(props: props) {
  return (
    <Container className="NFTInformation">
      <Form>
        <Form.Group as={Row} controlId="formNFTInfoOwner">
          <Form.Label column sm="3">
            <b>Owner:</b>
          </Form.Label>
          <Col sm="9">
            <Form.Control
              plaintext
              readOnly
              defaultValue={props.nftmetadata.owner}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formNFTToken">
          <Form.Label column sm="3">
            <b>Contract:</b>
          </Form.Label>
          <Col sm="9">
            <Form.Control
              plaintext
              readOnly
              defaultValue={props.nftmetadata.token}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formNFTInfoID">
          <Form.Label column sm="3">
            <b>NFT-ID:</b>
          </Form.Label>
          <Col sm="9">
            <Form.Control
              plaintext
              readOnly
              defaultValue={props.nftmetadata.id}
            />
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}
