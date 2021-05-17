// SPDX-License-Identifier: Apache-2.0

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

interface props {
  img: string;
  title: string;
  description: string;
  buttons?: JSX.Element;
  invalid?: boolean;
  onClick?: () => void;
}

export default function NFT(props: props) {
  return (
    <Card
      className={props.invalid ? "InvalidNFT" : "NFT"}
      onClick={props.onClick}
    >
      <Card.Img
        className={props.invalid ? "InvalidNFTImage" : "NFTImage"}
        variant="top"
        src={props.img}
      />
      <Container className="NFTTextContainer">
        <Container className="NFTText">{props.description}</Container>
      </Container>
      <Card.Body>
        <Card.Title className="NFTTitle">
          {props.title.length < 100
            ? props.title
            : `${props.title.substr(0, 76)}...`}
        </Card.Title>
        {props.buttons ? props.buttons : <></>}
      </Card.Body>
    </Card>
  );
}
