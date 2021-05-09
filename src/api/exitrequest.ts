// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import { jsonObject } from "typedjson";

@jsonObject
export default class ExitRequestTX extends Transaction {
  type() {
    return ExitRequestTX;
  }
  typeName(): string {
    return "ExitRequest";
  }

  toABI() {}
}
