// SPDX-License-Identifier: Apache-2.0

import Values from "./value/value";
import { jsonObject, jsonMember } from "typedjson";
import BigInteger from "./bigint";

@jsonObject
export default class Account {
  @jsonMember(BigInteger) nonce: BigInteger;
  @jsonMember(Values) values: Values;
  @jsonMember(Values) locked: Values;

  constructor(nonce: bigint, values: Values, locked: Values) {
    this.nonce = new BigInteger(nonce);
    this.values = values;
    this.locked = locked;
  }
}
