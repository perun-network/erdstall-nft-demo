// SPDX-License-Identifier: Apache-2.0

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

interface props {
  img: string;
  title: string;
  description: string;
  buttons?: JSX.Element;
}

export default function NFT(props: props) {
  return (
    <Card className="NFT">
      <Card.Img className="NFTImage" variant="top" src={props.img} />
      <Container className="NFTTextContainer">
        <Container className="NFTText">{props.description}</Container>
      </Container>
      <Card.Body>
        <Card.Title className="NFTTitle">{props.title}</Card.Title>
        {props.buttons ? props.buttons : <></>}
      </Card.Body>
    </Card>
  );
}
