// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember, TypedJSON } from "typedjson";
import Address from "./address";
import Signature from "./signature";
import CustomJSON from "./customjson";
import BigInteger from "./bigint";

@jsonObject
export default abstract class Transaction extends ERDSTALLOBJECT {
  @jsonMember sender: Address;
  @jsonMember nonce: BigInteger;
  @jsonMember epoch: BigInteger;
  @jsonMember sig: Signature;

  static fromJSON: (js: any) => Transaction;

  constructor(sender: Address, nonce: bigint, epoch: bigint, sig: Signature) {
    super();
    this.sender = sender;
    this.nonce = new BigInteger(nonce);
    this.epoch = new BigInteger(epoch);
    this.sig = sig;
  }

  static toJSON(me: Transaction) {
    return {
      type: me.typeName(),
      data: JSON.parse(TypedJSON.stringify(me, me.type())),
    };
  }

  objectType(): any {
    return Transaction;
  }

  objectTypeName(): string {
    return "Transaction";
  }

  abstract type(): any;
  abstract typeName(): string;
}

CustomJSON(Transaction);

TypedJSON.mapType(BigInt, {
  deserializer: (json: any) => (json == null ? json : BigInt(json)),
  serializer: (value: any) => (value == null ? value : value.toString()),
});
