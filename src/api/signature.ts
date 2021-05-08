// SPDX-License-Identifier: Apache-2.0

import { utils } from "ethers";
import { jsonObject } from "typedjson";
import CustomJSON from "./customjson";

@jsonObject
export default class Signature {
  value: Uint8Array;
  constructor(value: Uint8Array) {
    this.value = value;
  }

  static fromJSON(val: any): Signature {
    return new Signature(utils.arrayify(val));
  }

  static toJSON(me: Signature) {
    return utils.hexlify(me.value);
  }
}

CustomJSON(Signature);
