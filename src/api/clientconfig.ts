// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";
import Address from "./address";

@jsonObject
export default class ClientConfig extends ERDSTALLOBJECT {
  @jsonMember contract: Address;
  @jsonMember networkID: string;
  @jsonMember powDepth: number;

  constructor(contract: Address, networkID: string, powDepth: number) {
    super();
    this.contract = contract;
    this.networkID = networkID;
    this.powDepth = powDepth;
  }

  objectType(): any {
    return ClientConfig;
  }

  objectTypeName(): string {
    return "ClientConfig";
  }
}
