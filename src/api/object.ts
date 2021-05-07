// SPDX-License-Identifier: Apache-2.0

import { jsonObject, TypedJSON } from "typedjson";
import CustomJSON from "./customjson";

/** Object is the base from which all other network message types derive. */
@jsonObject
abstract class ERDSTALLOBJECT {
  public static fromJSON: (js: any) => ERDSTALLOBJECT;
  abstract objectType(): any;
  abstract objectTypeName(): string;

  static toJSON(me: ERDSTALLOBJECT) {
    return {
      type: me.objectTypeName(),
      data: JSON.parse(TypedJSON.stringify(me, me.objectType())),
    };
  }
}

CustomJSON(ERDSTALLOBJECT);

export default ERDSTALLOBJECT;
