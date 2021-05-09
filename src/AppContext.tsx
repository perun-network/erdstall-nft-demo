// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { ethers } from "ethers";
import Connection from "./wire/connection";
import Address from "./api/address";
import Url from "./wire/url";

const config = require("./config.json");

export interface NiftyErdstallState {
  account?: Address;
  contract?: Address;
  conn: Connection;
  provider?: ethers.providers.Web3Provider;
  nerdop: Url;
}

const operatorURL = new Url(
  config.OperatorPort,
  config.OperatorAddr,
  "ws",
  "/ws"
);

const nerdop = new Url(config.NERDPort, config.NERDAddr, "http", "");

const AccountContext = React.createContext({
  conn: new Connection(operatorURL),
  nerdop: nerdop,
} as NiftyErdstallState);

export default AccountContext;
