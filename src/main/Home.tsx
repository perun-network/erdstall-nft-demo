// SPDX-License-Identifier: Apache-2.0

import Container from "react-bootstrap/Container";
import AdaptiveTileList from "../layouts/AdaptiveTileList";
import Col from "react-bootstrap/Col";
import NFT from "./NFT";

function Home() {
  const imgs = ["/bog.png", "/nerd.png", "/cia.png"];
  const description =
    "This exquisite piece of digital art represents the crypto space in all its glory, swing-trading and loss of funds. One might say it is created by a divine being, humble enough to bless us with a short visit dumping all them prices.";
  const title = "Bogdanov";
  const buildCells = () => {
    var tiles: JSX.Element[] = new Array(64);
    for (var i: number = 0; i < tiles.length; i++) {
      const img = imgs[0 | (Math.random() * imgs.length)];
      tiles[i] = (
        <Col key={i} className="NFTTile" xs={12} sm={6} md={4} lg={3} xl={2}>
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
    <Container className="Home" fluid>
      <AdaptiveTileList nfts={buildCells()} />
    </Container>
  );
}

export default Home;
