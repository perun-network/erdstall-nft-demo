// SPDX-License-Identifier: Apache-2.0

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Divider from "../layouts/Divider";

interface props {
  onConfidential: (isConfidential: boolean) => void;
}

export default function MintSettings(props: props) {
  return (
    <Container className="MintSettings">
      <Form>
        <Form.Group controlId="formNFTDescription">
          <Form.Label>Settings</Form.Label>
          <Divider />
          <Form.Check
            label="Confidential"
            name="formNFTConfidential"
            id="formNFTConfidential"
            onChange={(ev) => {
              if (!ev.target.value) {
                return;
              }
              props.onConfidential(ev.target.value === "on");
            }}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
