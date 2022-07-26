import React, { useState } from "react";

const ExpandCollapse = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const divStyles = {
    marginLeft: "25px",
    marginTop: "5px"
  };

  const spanStyle = {
    display: "inline-block",
    color: "red",
    border: "1px solid black",
    padding: "5px",
    width: "100px",
    textAlign: "center",
    cursor: "pointer"
  };

  const comp = (
    <span style={spanStyle} onClick={() => setExpand(!expand)}>
      {data.name}
    </span>
  );

  if (typeof data.children !== "undefined") {
    return (
      <div style={divStyles}>
        {comp}
        {expand &&
          data.children.map((val) => {
            return <ExpandCollapse key={val.id} data={val} />;
          })}
      </div>
    );
  } else {
    return <div style={divStyles}>{comp}</div>;
  }
};

export default ExpandCollapse;
