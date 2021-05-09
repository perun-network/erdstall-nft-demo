// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import TripleTiles from "../layouts/TripleTiles";
import NFT from "./NFT";
import NFTMetaData from "../api/nftmetadata";
import NFTInformation from "./NFTInformation";

export default function SingleNFT() {
  const [ready, setReady] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const { token, id } = useParams<{ token: string; id: string }>();
  const [img, setImage] = React.useState("");
  const [nftState, setNFTState] = React.useState({} as NFTMetaData);

  React.useEffect(() => {
    const getNFTData = async () => {
      const response = await fetch(
        `${window.location.protocol}//${window.location.hostname}:8440/nft/${token}/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );

      if (!response.ok) {
        throw new Error("unknown NFT");
      }

      return response.json();
    };

    getNFTData().then(
      (res: NFTMetaData) => {
        setImage(`/assets/${res.assetId}.png`);
        setNFTState(res);
        setReady(true);
      },
      () => {
        setReady(true);
        setErr(true);
      }
    );
  });

  return (
    <Container>
      {ready ? (
        <TripleTiles
          lt={
            <NFT
              img={img}
              title={err ? "Error: 404 Not Found" : "Not a random NFT"}
              description={
                err
                  ? "There is no NFT with this ID."
                  : "This is NOT a random NFT"
              }
              invalid={err}
            />
          }
          lb={<></>}
          rs={<NFTInformation nftmetadata={nftState} />}
          buttons={<></>}
        />
      ) : (
        <Container>
          <h1>LOADING</h1>
        </Container>
      )}
    </Container>
  );
}
