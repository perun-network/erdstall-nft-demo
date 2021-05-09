// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";
import Account from "./account";
import BigInteger from "./bigint";

@jsonObject
export default class AccountResponse extends ERDSTALLOBJECT {
  @jsonMember(Account) account: Account;
  @jsonMember(BigInteger) epoch: BigInteger;

  constructor(account: Account, epoch: BigInt) {
    super();
    this.account = account;
    this.epoch = new BigInteger(epoch);
  }

  objectType(): any {
    return AccountResponse;
  }

  objectTypeName(): string {
    return "AccountResponse";
  }
}
