// SPDX-License-Identifier: Apache-2.0

import ERDSTALLOBJECT from "./object";
import { jsonObject, jsonMember, TypedJSON } from "typedjson";
import Address from "./address";
import Signature from "./signature";
import CustomJSON from "./customjson";
import BigInteger from "./bigint";
import { utils, Signer } from "ethers";

@jsonObject
export default abstract class Transaction extends ERDSTALLOBJECT {
  @jsonMember(Address) sender: Address;
  @jsonMember(BigInteger) nonce: BigInteger;
  @jsonMember(BigInteger) epoch: BigInteger;
  @jsonMember(Signature) sig?: Signature;

  static fromJSON: (js: any) => Transaction;

  constructor(sender: Address, nonce: bigint, epoch: bigint) {
    super();
    this.sender = sender;
    this.nonce = new BigInteger(nonce);
    this.epoch = new BigInteger(epoch);
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
  protected abstract toABI(contract: string): any;

  async sign(contract: string, signer: Signer) {
    const msg = this.toABI(contract);
    const data = utils.keccak256(msg);
    const sig = await signer.signMessage(utils.arrayify(data));
    this.sig = new Signature(utils.arrayify(sig));
  }
}

CustomJSON(Transaction);

TypedJSON.mapType(BigInt, {
  deserializer: (json: any) => (json == null ? json : BigInt(json)),
  serializer: (value: any) => (value == null ? value : value.toString()),
});
