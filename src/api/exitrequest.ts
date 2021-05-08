// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import Address from "./address";
import Signature from "./signature";
import { jsonObject } from "typedjson";

@jsonObject
export default class ExitRequestTX extends Transaction {
  constructor(sender: Address, nonce: bigint, epoch: bigint, sig: Signature) {
    super(sender, nonce, epoch, sig);
  }
  type() {
    return ExitRequestTX;
  }
  typeName(): string {
    return "ExitRequest";
  }
}
