// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";

@jsonObject
export default class Subscribe extends ERDSTALLOBJECT {
  @jsonMember who: string;

  constructor(who: string) {
    super();
    this.who = who;
  }

  objectType(): any {
    return Subscribe;
  }

  objectTypeName(): string {
    return "Subscribe";
  }
}
