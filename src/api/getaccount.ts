// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";
import Address from "./address";

@jsonObject
export default class GetAccount extends ERDSTALLOBJECT {
  @jsonMember(Address) who: Address;

  constructor(who: Address) {
    super();
    this.who = who;
  }

  objectType(): any {
    return GetAccount;
  }

  objectTypeName(): string {
    return "GetAccount";
  }
}
