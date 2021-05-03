// SPDX-License-Identifier: Apache-2.0

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyNFTs from "./MyNFTs";
import Mint from "./Mint";
import About from "./About";
import Contact from "./Contact";
import Onboarding from "./Onboarding";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Onboarding}></Route>
      <Route exact path="/me/home" component={Home}></Route>
      <Route exact path="/me/nfts" component={MyNFTs}></Route>
      <Route exact path="/me/mint" component={Mint}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
}

export default Main;
