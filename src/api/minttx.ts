// SPDX-License-Identifier: Apache-2.0

import Transaction from "./transaction";
import { utils, BigNumber } from "ethers";
import Address from "./address";
import { jsonObject, jsonMember } from "typedjson";
import BigInteger from "./bigint";

@jsonObject
export default class MintTX extends Transaction {
  @jsonMember(Address) token: Address;
  @jsonMember(BigInteger) id: BigInteger;

  constructor(
    sender: Address,
    nonce: bigint,
    epoch: bigint,
    tokenType: Address,
    id: bigint
  ) {
    super(sender, nonce, epoch);
    this.token = tokenType;
    this.id = new BigInteger(id);
  }

  type() {
    return MintTX;
  }

  typeName(): string {
    return "Mint";
  }

  toABI(contract: string) {
    return utils.defaultAbiCoder.encode(
      [String, SolAddress, SolAddress, Uint64, Uint64, SolAddress, Uint256],
      [
        "ErdstallMintTX",
        contract,
        this.sender.toString(),
        BigNumber.from(this.epoch.value),
        BigNumber.from(this.nonce.value),
        this.token.toString(),
        BigNumber.from(this.id.value),
      ]
    );
  }
}

const Uint256 = "uint256";
const Uint64 = "uint64";
const SolAddress = "address";
const String = "string";
