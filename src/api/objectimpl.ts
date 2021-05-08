// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { TypedJSON } from "typedjson";
import Subscribe from "./subscribe";
import ClientConfig from "./clientconfig";
import TxReceipt from "./txreceipt";
import Transaction from "./transaction";

ERDSTALLOBJECT.fromJSON = (js: any): ERDSTALLOBJECT => {
  let data = JSON.stringify(js.data);

  switch (js.type) {
    case "TxReceipt":
      return TypedJSON.parse(data, TxReceipt)!;
    case "ClientConfig":
      return TypedJSON.parse(data, ClientConfig)!;
    case "Subscribe":
      return TypedJSON.parse(data, Subscribe)!;
    case "Transaction":
      return TypedJSON.parse(data, Transaction)!;
    default:
      throw new Error(`unknown type "${js.type}"`);
  }
};
