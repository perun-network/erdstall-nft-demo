// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import TripleTiles from "../layouts/TripleTiles";
import MintSettings from "./MintSettings";
import NFTPreview from "./NFTPreview";
import MintingSummary from "./MintingSummary";

function NFTTrade() {
  return (
    <Container className="Mint">
      <TripleTiles lt={} lb={} rs={} />
    </Container>
  );
}

export default NFTTrade;
