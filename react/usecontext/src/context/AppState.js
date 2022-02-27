import React, { useState } from "react";
import AppContext from "./AppContext";

export default function AppState(props) {
  const [flag, setFlag] = useState(false);
  return (
    <AppContext.Provider
      value={{
        flag,
        setFlag,
        message: "This message is coming from the context.",
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
