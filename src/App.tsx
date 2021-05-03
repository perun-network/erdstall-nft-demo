// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Navigation from "./navigation/Navigation";
import Main from "./main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation onboarded={true} />
      <Main />
    </div>
  );
}

export default App;
