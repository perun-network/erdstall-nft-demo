// SPDX-License-Identifier: Apache-2.0

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface props {
  content: JSX.Element;
  toggleShow: () => void;
  show: boolean;
}

export default function InfoModal(props: props) {
  return (
    <Modal
      className="infomodal"
      aria-labelledby="contained-modal-title-vcenter"
      show={props.show}
      onHide={props.toggleShow}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.content}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.toggleShow}>
          Okay!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
