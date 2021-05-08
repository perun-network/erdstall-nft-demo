// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import TransferTX from "./transfertx";
import MintTX from "./minttx";
import ExitRequestTX from "./exitrequest";
import { TypedJSON } from "typedjson";

Transaction.fromJSON = (js: any): Transaction => {
  let data = JSON.stringify(js.data);

  switch (js.type) {
    case "Transfer":
      return TypedJSON.parse(data, TransferTX)!;
    case "Mint":
      return TypedJSON.parse(data, MintTX)!;
    case "ExitRequest":
      return TypedJSON.parse(data, ExitRequestTX)!;
    default:
      throw new Error(`unknown type "${js.type}"`);
  }
};
