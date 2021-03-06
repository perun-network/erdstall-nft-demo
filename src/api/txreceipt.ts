// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import Transaction from "./transaction";
import { jsonObject, jsonMember } from "typedjson";
import Account from "./account";

@jsonObject
export default class TxReceipt extends ERDSTALLOBJECT {
  @jsonMember(Transaction) tx: Transaction;
  @jsonMember(Account) account: Account;

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
