// SPDX-License-Identifier: Apache-2.0

import { utils } from "ethers";
import { jsonObject } from "typedjson";
import CustomJSON from "./customjson";

@jsonObject
export default class Address {
  value: Uint8Array;
  constructor(value: Uint8Array) {
    this.value = value;
  }

  static fromJSON(val: any): Address {
    return new Address(utils.arrayify(val));
  }

  static toJSON(me: Address) {
    return utils.hexlify(me.value);
  }

  toString(): string {
    return utils.hexlify(this.value);
  }
}

CustomJSON(Address);
