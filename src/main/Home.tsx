// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Container from "react-bootstrap/Container";
import AdaptiveTileList from "../layouts/AdaptiveTileList";
import Col from "react-bootstrap/Col";
import NFT from "./NFT";
import NFTMetaData from "../api/nftmetadata";

function Home() {
  const [ready, setReady] = React.useState(false);
  const [nfts, setNFTs] = React.useState(new Array<JSX.Element>());

  const fetchNFTs = () => {
    const getNFTs = async () => {
      const response = await fetch(
        `${window.location.protocol}//${window.location.hostname}:8440/nfts`,
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

    getNFTs().then((v) => {
      console.log("GETTING NFTS");
      setNFTs(mapNFTDataToImages(v));
      setReady(true);
    });
  };

  React.useEffect(fetchNFTs, []);

  return (
    <Container className="Home" fluid>
      {ready ? <AdaptiveTileList nfts={nfts} /> : <></>}
    </Container>
  );
}

function mapNFTDataToImages(nfts: NFTMetaData[]): JSX.Element[] {
  const description = "No descriptions available, yet.";
  return nfts.map((data, i) => {
    const img = `/assets/${data.assetId}.png`;
    console.log(img);
    return (
      <Col key={i} className="NFTTile" xs={12} sm={6} md={4} lg={3} xl={2}>
        <NFT img={img} title={`${data.id}`} description={description} />
      </Col>
    );
  });
}

export default Home;
