// https://codesandbox.io/s/gifted-faraday-mcohji?file=/src/ExpandCollapse.js

import React, { useState } from "react";

export default function ExpandCollapse({ data }) {
  const [expand, setExpand] = useState(false);
  const styles = {
    // display: "flex",
    // justifyContent: "flex-start",
    // height: "50vh",
    margin: "15px",
  };

  if (typeof data.children !== "undefined") {
    return (
      <div style={styles}>
        <span onClick={() => setExpand(!expand)}>
          id: {data.id} and pid: {data.pid}
        </span>
        {expand ? (
          <div>
            {data.children.map((item) => {
              return (
                <span>
                  <ExpandCollapse key={item.id} data={item} />
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <>
        <br />
        <span style={styles}>
          id: {data.id} and pid: {data.pid}
        </span>
      </>
    );
  }
}

// style={{ display: expand ? "block" : "none" }}
