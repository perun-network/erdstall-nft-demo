// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import Address from "./address";
import Signature from "./signature";
import Values from "./value/value";
import { jsonObject, jsonMember } from "typedjson";

@jsonObject
export default class TransferTX extends Transaction {
  @jsonMember recipient: Address;
  @jsonMember values: Values;

  constructor(
    sender: Address,
    nonce: bigint,
    epoch: bigint,
    sig: Signature,
    recipient: Address,
    values: Values
  ) {
    super(sender, nonce, epoch, sig);
    this.recipient = recipient;
    this.values = values;
  }

  type() {
    return TransferTX;
  }
  typeName(): string {
    return "Transfer";
  }
}
