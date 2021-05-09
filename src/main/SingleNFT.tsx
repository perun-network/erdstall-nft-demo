// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import TripleTiles from "../layouts/TripleTiles";
import NFT from "./NFT";
import NFTMetaData from "../api/nftmetadata";
import NFTInformation from "./NFTInformation";
import AppContext from "../AppContext";

export default function SingleNFT() {
  const [ready, setReady] = React.useState(false);
  const [secret, setSecret] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [err, setErr] = React.useState(false);
  const { token, id } = useParams<{ token: string; id: string }>();
  const [img, setImage] = React.useState("");
  const [nftState, setNFTState] = React.useState({} as NFTMetaData);
  const ctx = React.useContext(AppContext);

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
        const s =
          (!ctx.account && res.secret) ||
          (res.secret && res.owner !== ctx.account!.toString());
        setImage(s ? "/noise.gif" : `/assets/${res.assetId}.png`);
        setSecret(s);
        setTitle(res.title);
        setDescription(res.desc);
        setNFTState(res);
        setReady(true);
      },
      () => {
        setReady(true);
        setErr(true);
      }
    );
  }, []);

  return (
    <Container>
      {ready ? (
        <TripleTiles
          lt={
            <NFT
              img={img}
              title={err ? "Error: 404 Not Found" : title}
              description={err ? "There is no NFT with this ID." : description}
              invalid={err || secret}
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
