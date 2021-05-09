// SPDX-License-Identifier: Apache-2.0

import { Switch, Route, useRouteMatch } from "react-router-dom";
import SingleNFT from "./SingleNFT";

function NFTTrade() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:token/:id`}>
        <SingleNFT />
      </Route>
    </Switch>
  );
}

export default NFTTrade;
