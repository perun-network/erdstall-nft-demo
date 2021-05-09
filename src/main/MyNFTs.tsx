// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import AdaptiveTileList from "../layouts/AdaptiveTileList";
import Col from "react-bootstrap/Col";
import NFT from "./NFT";
import NFTMetaData from "../api/nftmetadata";
import AppContext from "../AppContext";

function MyNFTs() {
  const [ready, setReady] = React.useState(false);
  const [nfts, setNFTs] = React.useState(new Array<JSX.Element>());
  const history = useHistory();
  const ctx = React.useContext(AppContext);

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
      setNFTs(
        mapNFTDataToImages(v, history, (data: NFTMetaData): boolean => {
          console.log("COMPARING");
          console.log("data.owner: ", data.owner);
          console.log("ctx.account: ", ctx.account!.toString());
          return data.owner === ctx.account!.toString();
        })
      );
      setReady(true);
    });
  };

  React.useEffect(fetchNFTs, []);
  return (
    <Container className="MyNFTs" fluid>
      {ready ? <AdaptiveTileList nfts={nfts} /> : <></>}
    </Container>
  );
}

function mapNFTDataToImages(
  nfts: NFTMetaData[],
  history: any,
  pred: (data: NFTMetaData) => boolean
): JSX.Element[] {
  if (!nfts) {
    return [<></>];
  }
  const description = "No descriptions available, yet.";
  return nfts.map((data, i) => {
    if (!pred(data)) {
      return <></>;
    }

    const img = `/assets/${data.assetId}.png`;
    console.log(img);
    return (
      <Col key={i} className="NFTTile" xs={12} sm={6} md={4} lg={3} xl={2}>
        <NFT
          img={img}
          title={`${data.id}`}
          description={description}
          onClick={() => {
            history.push(`/nft/${data.token}/${data.id}`);
          }}
        />
      </Col>
    );
  });
}

export default MyNFTs;
