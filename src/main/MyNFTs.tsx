// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import AdaptiveTileList from "../layouts/AdaptiveTileList";
import Col from "react-bootstrap/Col";
import NFT from "./NFT";

function MyNFTs() {
  const imgs = ["/assets/0.png", "/assets/1.png", "/assets/2.png"];
  const description =
    "They are watching. You know it, I know it but most importantly, THEY know it.";
  const title = "CIA";
  const buildCells = () => {
    var tiles: JSX.Element[] = new Array(32);
    for (var i: number = 0; i < tiles.length; i++) {
      const img = imgs[0 | (Math.random() * imgs.length)];
      tiles[i] = (
        <Col key={i} className="NFTTile" xs={12} sm={6} md={4} lg={3} xl={3}>
          <NFT
            img={img}
            title={title.concat(`_${i}`)}
            description={description}
          />
        </Col>
      );
    }
    return tiles;
  };

  return (
    <Container className="MyNFTs" fluid>
      <AdaptiveTileList nfts={buildCells()} />
    </Container>
  );
}

export default MyNFTs;
