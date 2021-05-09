// SPDX-License-Identifier: Apache-2.0

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import MyNFTs from "./MyNFTs";
import Mint, { nftState } from "./Mint";
import Onboarding from "./Onboarding";
import NFTTrade from "./NFTTrade";

interface props {
  onboarded: boolean;
  toggleOnboarded: () => void;
}

function Main(props: props) {
  return (
    <Switch>
      <Route exact path="/">
        {props.onboarded ? (
          <Redirect to="/home" />
        ) : (
          <Onboarding toggleOnboarded={props.toggleOnboarded} />
        )}
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/me/nfts">
        {props.onboarded ? <MyNFTs /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/me/mint">
        {props.onboarded ? (
          <Mint
            onMint={(n: nftState) => {
              console.log("MINT REGISTERED");
              console.log(n);
            }}
          />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/nft">
        <NFTTrade />
      </Route>
      <Route>
        {props.onboarded ? <Redirect to="/home" /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
}

export default Main;
