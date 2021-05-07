// SPDX-License-Identifier: Apache-2.0

import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import * as errors from "./Error";
import initWeb3 from "../logic/web3";
import AppContext from "../AppContext";

interface props {
  toggleOnboarded: () => void;
}

function Onboarding(props: props) {
  const state = useContext(AppContext);
  return (
    <Container className="d-flex justify-content-center Onboarding" fluid>
      <Row className="my-auto">
        <Button
          onClick={async () => {
            const res = await onboard();
            if (res instanceof Error) {
              return;
            }
            state.account = res;
            props.toggleOnboarded();
          }}
        >
          Connect to MetaMask
        </Button>
      </Row>
    </Container>
  );
}

async function onboard(): Promise<string | Error> {
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

  return account;
}

export default Onboarding;
