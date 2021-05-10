// SPDX-License-Identifier: Apache-2.0

import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ethers, utils } from "ethers";

import * as errors from "./Error";
import initWeb3 from "../logic/web3";
import AppContext from "../AppContext";
import Address from "../api/address";

interface props {
  toggleOnboarded: () => void;
}

function Onboarding(props: props) {
  const ctx = useContext(AppContext);
  return (
    <Container className="d-flex justify-content-center Onboarding" fluid>
      <Row className="my-auto">
        <Button
          onClick={async () => {
            if (!ctx.connected) {
              errors.Erdstall(
                <p>Operator unreachable, please try at a later time.</p>
              );
              return;
            }

            const res = await onboard();
            if (res instanceof Error) {
              return;
            }

            const { s, p } = res;
            ctx.account = new Address(utils.arrayify(s));
            ctx.provider = p;
            ctx.conn.subscribe(ctx.account.toString());
            props.toggleOnboarded();
          }}
        >
          Connect to MetaMask
        </Button>
      </Row>
    </Container>
  );
}

async function onboard(): Promise<
  { s: string; p: ethers.providers.Web3Provider } | Error
> {
  const web3Provider = await initWeb3();

  const ethereum = web3Provider.provider! as any;

  if (!ethereum.isMetaMask) {
    const err =
      "Please install MetaMask to enjoy the Nifty-Erdstall experience.";
    errors.Erdstall(<p>{err}</p>);
    return new Error(err);
  }

  if (!ethereum.isConnected()) {
    const err =
      "Provider not properly connected to network, check your (blockchain) network settings.";
    errors.Erdstall(<p>{err}</p>);
    return new Error(err);
  }

  let account: string = "";
  try {
    await web3Provider.provider.request!({
      method: "eth_requestAccounts",
    }).then((accs: string[]) => {
      if (accs.length === 0) {
        throw new Error("Please connect to MetaMask.");
      }

      account = accs[0];
    });
  } catch (err) {
    errors.Erdstall(<p> Error connecting to MetaMask: {err.message} </p>);
    return new Error(err);
  }

  return { s: account, p: web3Provider };
}

export default Onboarding;
