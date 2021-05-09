// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

interface props {
  setImage: (image: number) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  images: JSX.Element[];
}

export default function NFTPreview(props: props) {
  const [image, setImage] = useState("/assets/0.png");
  return (
    <Card className="NFTPreview">
      <Card.Img className="NFTImage" variant="top" src={image} />
      <Card.Body>
        <Form>
          <Form.Group controlId="formNFTImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              as="select"
              defaultValue="0"
              type="NFTImage"
              placeholder="Choose an image to mint..."
              onChange={(event) => {
                if (!event.target.value) {
                  return;
                }
                setImage(`/assets/${event.target.value}.png`);
                props.setImage(Number.parseInt(event.target.value));
              }}
            >
              {props.images}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formNFTTitle">
            <Form.Control
              type="NFTTitle"
              placeholder="Enter the title for your NFT"
              onChange={(event) => {
                if (!event.target.value) {
                  return;
                }
                props.setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formNFTDescription">
            <Form.Control
              as="textarea"
              type="NFTDescription"
              placeholder="Enter a description for your NFT"
              onChange={(event) => {
                if (!event.target.value) {
                  return;
                }
                props.setDescription(event.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
