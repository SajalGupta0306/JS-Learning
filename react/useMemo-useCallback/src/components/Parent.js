import React, { useCallback, useState, useMemo } from "react";
import Child from "./Child";

const fib = (num) => {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
};

export default function Parent() {
  let [count, setCount] = useState(0);
  const [childCount, seChildCount] = useState(0);

  const [number, setNumber] = useState(0);

  // const fib = useCallback((num) => {
  //   return num <= 1 ? num : fib(num - 1) + fib(num - 2);
  // }, []);

  // const getFib = fib(number);
  const memoizedVal = useMemo(() => fib(number), [number]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const memoizedCallback = useCallback((number) => clickChildEvent(number), []);
  // console.log(memoizedCallback);

  const clickChildEvent = (val) => {
    seChildCount(val);
  };

  return (
    <div>
      <button onClick={increment}> Clicked {count} times</button>
      <Child value={childCount} childClicked={memoizedCallback} />
      <br />
      <div>
        <label htmlFor="">Enter a number to calculate Fibonacci: </label>
        <input
          type="text"
          placeholder="Enter a number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
      <br />
      <div>
        <label>Result: </label>
        <label>{memoizedVal || "--"}</label>
        {/* <label>{getFib || "--"}</label> */}
      </div>
    </div>
  );
}

// diff between useMemo and useCallback
// https://procoders.tech/blog/difference-between-usememo-and-usecallback/

// since child has a prop passed which changes, child will re-render whether it is consumed in child or not
// input doesnt makes a child render as there is no relation between the 2.
// When we passed callback (updateChildClick), the child is rendered as the reference is changed of function.
// to avoid this, useCallback is used which triggers based on a state change only, else not
