// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import Address from "./address";
import Values from "./value/value";
import { jsonObject, jsonMember } from "typedjson";

@jsonObject
export default class TransferTX extends Transaction {
  @jsonMember(Address) recipient: Address;
  @jsonMember(Values) values: Values;

  constructor(
    sender: Address,
    nonce: bigint,
    epoch: bigint,
    recipient: Address,
    values: Values
  ) {
    super(sender, nonce, epoch);
    this.recipient = recipient;
    this.values = values;
  }

  type() {
    return TransferTX;
  }
  typeName(): string {
    return "Transfer";
  }

  toABI() {}
}
