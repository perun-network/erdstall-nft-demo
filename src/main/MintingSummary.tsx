// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import Divider from "../layouts/Divider";

export default function MintingSummary() {
  return (
    <Container className="MintingSummary">
      <h3>Minting</h3>
      <Divider />
      <p className="NERDSummary">
        You are about to mint your very own NFT. This minting process happens
        entirely <b>off-chain</b> secured by{" "}
        <a target="_blank" rel="noreferrer" href="https://erdstall.dev">
          🍵 Erdstall
        </a>
        .
      </p>
      <h3>Process</h3>
      <Divider />
      <p className="NERDSummary">
        As soon as you press press the <b>Mint</b>-Button below, a minting
        transaction is send within the Layer-2 Erdstall platform. This is
        completely free without any cost. The Layer-1 costs for minting the NFT
        are only ever realised by the current owner at the time of withdrawing.
      </p>
      <h3>Confidential NFT</h3>
      <Divider />
      <p className="NERDSummary">
        NERD introduces confidential NFTs, which allow only the owner to see the
        data attached to the NFT. You, the minter, can decide whether to make
        your NFT public or confidential. Confidential NFTs require you to be the
        current owner in order to be able to decrypt and view their data.
      </p>
      <p className="NERDSummary">
        This feature is not possible on Layer-1 but due to the technology used
        by Erdstall this can be done in a secure, privacy preserving way.
      </p>
      <p className="NERDSummary">
        In the future, confidential NFTs can not only be used to give access to
        single, fixed images but also on demand to encrypted content later
        published for the NFT.
      </p>
    </Container>
  );
}
