// SPDX-License-Identifier: Apache-2.0

import React from "react";
import Navigation from "./navigation/Navigation";
import Main from "./main/Main";

import InfoModal from "./main/InfoModal";

import * as errors from "./main/Error";
import AppContext from "./AppContext";
import "./App.css";

function App() {
  const leaveHint = [
    "Leaving/Reloading for this Demo is not supported.",
    "You will need to reconnect your account if you decide to do so.",
    "All your minted NFTs are still available but temporary data would be lost.",
  ].join(" ");

  const [onboarded, setOnboarded] = React.useState(false);
  const [hasInfo, setShowInfo] = React.useState(false);

  const [content, setInfoContent] = React.useState(<></>);
  const handleError = (ev: CustomEventInit) => {
    setInfoContent(ev.detail);
    setShowInfo(true);
  };

  const handleRefresh = (e: Event) => {
    if (onboarded) {
      e.preventDefault();
      e.returnValue = true;

      errors.Erdstall(<p>{leaveHint}</p>);
    }
  };

  React.useEffect(() => {
    window.addEventListener("beforeunload", handleRefresh);
    document.addEventListener("ErdstallError", handleError);
    return () => {
      document.removeEventListener("ErdstallError", handleError);
      window.removeEventListener("beforeunload", handleRefresh);
    };
  });

  return (
    <>
      <Navigation onboarded={onboarded} />
      <div className="App">
        <AppContext.Provider value={{ account: "" }}>
          <Main
            onboarded={onboarded}
            toggleOnboarded={() => {
              setOnboarded(!onboarded);
            }}
          />
        </AppContext.Provider>
      </div>
      <InfoModal
        content={content}
        show={hasInfo}
        toggleShow={() => {
          setShowInfo(false);
        }}
      />
    </>
  );
}

export default App;
