// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import Address from "./address";
import Signature from "./signature";
import { jsonObject, jsonMember } from "typedjson";
import BigInteger from "./bigint";

@jsonObject
export default class MintTX extends Transaction {
  @jsonMember token: Address;
  @jsonMember id: BigInteger;

  constructor(
    sender: Address,
    nonce: bigint,
    epoch: bigint,
    sig: Signature,
    tokenType: Address,
    id: bigint
  ) {
    super(sender, nonce, epoch, sig);
    this.token = tokenType;
    this.id = new BigInteger(id);
  }

  type() {
    return MintTX;
  }

  typeName(): string {
    return "Mint";
  }
}
