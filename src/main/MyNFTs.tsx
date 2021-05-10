// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import AdaptiveTileList from "../layouts/AdaptiveTileList";
import Col from "react-bootstrap/Col";
import NFT from "./NFT";
import NFTMetaData from "../api/nftmetadata";
import AppContext from "../AppContext";

const config = require("../config.json");

function MyNFTs() {
  const [ready, setReady] = React.useState(false);
  const [nfts, setNFTs] = React.useState(new Array<JSX.Element>());
  const history = useHistory();
  const ctx = React.useContext(AppContext);

  const fetchNFTs = () => {
    const getNFTs = async () => {
      const response = await fetch(
        `${window.location.protocol}//${config.NERDAddr}:${config.NERDPort}/nfts`,
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

    const pred = (data: NFTMetaData): boolean => {
      return data.owner === ctx.account!.toString();
    };

    getNFTs().then((v: NFTMetaData[]) => {
      setNFTs(mapNFTDataToImages((v || []).filter(pred), history));
      setReady(true);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchNFTs, []);
  return (
    <Container className="MyNFTs" fluid>
      {ready ? <AdaptiveTileList nfts={nfts} /> : <></>}
    </Container>
  );
}

function mapNFTDataToImages(nfts: NFTMetaData[], history: any): JSX.Element[] {
  if (!nfts) {
    return [];
  }
  return nfts.map((data, i) => {
    const img = `/assets/${data.assetId}.png`;
    console.log(img);
    return (
      <Col key={i} className="NFTTile" xs={12} sm={6} md={4} lg={3} xl={2}>
        <NFT
          img={img}
          title={data.title}
          description={data.desc}
          onClick={() => {
            history.push(`/nft/${data.token}/${data.id}`);
          }}
        />
      </Col>
    );
  });
}

export default MyNFTs;
