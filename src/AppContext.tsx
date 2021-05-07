// SPDX-License-Identifier: Apache-2.0

import React from "react";

export interface NiftyErdstallState {
  account: string;
}

const AccountContext = React.createContext({ account: "" });

export default AccountContext;
