// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

interface props {
  setImage: (image: number) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setValidInput: (valid: boolean) => void;
  images: JSX.Element[];
}

const titleLimit = 128;
const descLimit = 1024;

export default function NFTPreview(props: props) {
  const [image, setImage] = useState("/assets/0.png");
  const [validTitle, setValidTitle] = useState(true);
  const [validDesc, setValidDesc] = useState(true);

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
              isInvalid={!validTitle}
              onChange={(event) => {
                if (!event.target.value) {
                  return;
                }

                setValidTitle(event.target.value.length <= titleLimit);
                props.setValidInput(validTitle);

                if (!validTitle) return;
                props.setTitle(event.target.value);
              }}
            />
            <Form.Control.Feedback tooltip type="invalid">
              Maximum length of title is {titleLimit}.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formNFTDescription">
            <Form.Control
              as="textarea"
              type="NFTDescription"
              placeholder="Enter a description for your NFT"
              isInvalid={!validDesc}
              onChange={(event) => {
                if (!event.target.value) {
                  return;
                }

                setValidDesc(event.target.value.length <= descLimit);
                props.setValidInput(validDesc);

                if (!validDesc) return;
                props.setDescription(event.target.value);
              }}
            />
            <Form.Control.Feedback tooltip type="invalid">
              Maximum length of description is {descLimit}.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
