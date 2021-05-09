// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember } from "typedjson";

@jsonObject
export default class Call {
  @jsonMember(String) id?: string;
  @jsonMember(ERDSTALLOBJECT) data?: ERDSTALLOBJECT;
  @jsonMember(String) error?: string;

  constructor(id: string, data: ERDSTALLOBJECT, error?: string) {
    this.id = id;
    this.data = data;
    this.error = error;
  }
}
