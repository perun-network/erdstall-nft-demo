// SPDX-License-Identifier: Apache-2.0

import IDSet from "./idset";
import Uint from "./uint";
import CustomJSON from "../customjson";
import { jsonObject } from "typedjson";

export type Value = Uint | IDSet;

enum EncodedValues {
  uint = "uint",
  idset = "idset",
}

@jsonObject
export default class Values {
  public values: Map<string, Value>;

  constructor() {
    this.values = new Map<string, Value>();
  }

  static toJSON(me: Values) {
    var obj: any = {};
    me.values.forEach((v, k) => {
      var withTypeEncoded: any = {};
      withTypeEncoded[me.resolveType(v)] = v;
      obj[k] = withTypeEncoded;
    });
    return obj;
  }

  private resolveType(v: Value): string {
    if (v instanceof Uint) {
      return EncodedValues.uint;
    } else if (v instanceof IDSet) {
      return EncodedValues.idset;
    } else {
      return "unknown";
    }
  }

  static fromJSON(data: any): Values {
    const vs = new Values();
    for (const k in data) {
      for (const v in data[k]) {
        switch (v) {
          case EncodedValues.idset:
            vs.values.set(k, IDSet.fromJSON(data[k][v]));
            break;
          case EncodedValues.uint:
            vs.values.set(k, Uint.fromJSON(data[k][v]));
            break;
          default:
            return vs;
        }
      }
    }
    return vs;
  }
}

CustomJSON(Values);
