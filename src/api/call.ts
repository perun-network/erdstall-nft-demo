// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";

@jsonObject
export default class Call {
  @jsonMember id?: string;
  @jsonMember data?: ERDSTALLOBJECT;
  @jsonMember error?: string;

  constructor(id: string, data: ERDSTALLOBJECT, error?: string) {
    this.id = id;
    this.data = data;
    this.error = error;
  }
}
