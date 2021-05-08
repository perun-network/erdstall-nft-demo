// SPDX-License-Identifier: Apache-2.0

import { jsonObject } from "typedjson";
import CustomJSON from "./customjson";

@jsonObject
export default class BigInteger {
  value: BigInt;
  constructor(value: BigInt) {
    this.value = value;
  }

  static fromJSON(val: any): BigInteger {
    return new BigInteger(BigInt(val));
  }

  static toJSON(me: BigInteger) {
    return me.value.toString();
  }
}

CustomJSON(BigInteger);
