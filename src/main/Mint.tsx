// SPDX-License-Identifier: Apache-2.0

import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import TripleTiles from "../layouts/TripleTiles";
import MintSettings from "./MintSettings";
import NFTPreview from "./NFTPreview";
import MintingSummary from "./MintingSummary";
import AppContext from "../AppContext";
import MintTX from "../api/minttx";
import AccountResponse from "../api/accountresponse";

const config = require("../config.json");

export interface nftState {
  confidential: boolean;
  title: string;
  image: number;
  description: string;
}

interface props {
  onMint: (s: nftState) => void;
}

const defaultImages: JSX.Element[] = [0, 1, 2].map((v) => {
  return <option value={v}>{v}</option>;
});

function Mint(props: props) {
  const [confidential, setConfidential] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(0);
  const ctx = useContext(AppContext);
  const history = useHistory();

  return (
    <Container className="Mint">
      <TripleTiles
        lt={
          <NFTPreview
            images={defaultImages}
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
            onClick={async () => {
              props.onMint({
                confidential: confidential,
                title: title,
                description: description,
                image: image,
              });

              const nftId = BigInt(
                Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
              );

              const res = (await ctx.conn!.getAccount(
                ctx.account!
              )) as AccountResponse;

              const minttx = new MintTX(
                ctx.account!,
                BigInt(res.account.nonce.value) + 1n,
                BigInt(res.epoch.value),
                ctx.account!,
                nftId
              );

              await minttx.sign(
                ctx.contract!.toString(),
                ctx.provider!.getSigner()
              );
              await ctx.conn!.mint(minttx);

              const putMetaData = async () => {
                const response = await fetch(
                  `${window.location.protocol}//${config.NERDAddr}:${config.NERDPort}/nft/${minttx.token}/${minttx.id.value}`,
                  {
                    method: "PUT",
                    body: JSON.stringify({
                      token: minttx.token.toString(),
                      id: minttx.id.value.toString(),
                      owner: minttx.sender.toString(),
                      assetId: image,
                      secret: confidential,
                      desc: description,
                      title: title,
                    }),
                    headers: {
                      "Content-Type": "text/plain",
                    },
                  }
                );

                if (!response.bodyUsed) {
                  return;
                } else {
                  return response.json();
                }
              };

              await putMetaData();
              history.push(`/nft/${minttx.token}/${minttx.id.value}`);
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
