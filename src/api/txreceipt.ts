// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import Transaction from "./transaction";
import Values from "./value/value";
import { jsonObject, jsonMember } from "typedjson";
import BigInteger from "./bigint";

@jsonObject
class Account {
  @jsonMember nonce: BigInteger;
  @jsonMember values: Values;
  @jsonMember locked: Values;

  constructor(nonce: bigint, values: Values, locked: Values) {
    this.nonce = new BigInteger(nonce);
    this.values = values;
    this.locked = locked;
  }
}

@jsonObject
export default class TxReceipt extends ERDSTALLOBJECT {
  @jsonMember tx: Transaction;
  @jsonMember account: Account;

  constructor(tx: Transaction, account: Account) {
    super();
    this.tx = tx;
    this.account = account;
  }

  objectType(): any {
    return TxReceipt;
  }

  objectTypeName(): string {
    return "TxReceipt";
  }
}
