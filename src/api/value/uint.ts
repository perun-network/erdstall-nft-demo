// SPDX-License-Identifier: Apache-2.0

import { BigNumber, utils } from "ethers";
import { CustomJSON } from "../customjson";

export default class Uint {
	public value: bigint;

	constructor(v: bigint) {
		this.value = v;
	}

	toJSON() {
		return utils.hexlify(BigNumber.from(this.value));
	}

	static fromJSON(hexString: string): Uint {
		return new Uint(BigInt(hexString));
	}
}

CustomJSON(Uint);