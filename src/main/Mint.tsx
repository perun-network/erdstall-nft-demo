// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import TripleTiles from "../layouts/TripleTiles";
import MintSettings from "./MintSettings";
import NFTPreview from "./NFTPreview";
import MintingSummary from "./MintingSummary";

export interface nftState {
  confidential: boolean;
  title: string;
  image: string;
  description: string;
}

interface props {
  onMint: (s: nftState) => void;
}

function Mint(props: props) {
  const [confidential, setConfidential] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("/defaultnft.png");

  return (
    <Container className="Mint">
      <TripleTiles
        lt={
          <NFTPreview
            setImage={setImage}
            setTitle={setTitle}
            setDescription={setDescription}
          />
        }
        lb={<MintSettings onConfidential={setConfidential} />}
        rs={<MintingSummary />}
        buttons={
          <Button
            className="MintButton"
            size="lg"
            variant="light"
            onClick={() => {
              props.onMint({
                confidential: confidential,
                title: title,
                description: description,
                image: image,
              });
            }}
          >
            Mint
          </Button>
        }
      />
    </Container>
  );
}

export default Mint;
