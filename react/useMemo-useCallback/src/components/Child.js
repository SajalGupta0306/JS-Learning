import React, { memo } from "react";

// child gets re-rendered, everytime there is a change in parent (counter getting incremented)
// memo checks for shallow copy of non-primitive objects and checks only reference
// to avoid, use memo
function Child({ value, childClicked }) {
  const childClick = () => {
    childClicked(Math.random());
  };
  console.log("child clicked");
  return (
    <div>
      <h1> Child button is clicked {value} times</h1>
      <button onClick={childClick}>child button</button>
    </div>
  );
}

// memo doesnt allow to re-render component if there is no prop change
export default memo(Child);
