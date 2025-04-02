// abort controller
// abortcontroller
// abort

// code
import React, { useState, useCallback, useEffect } from "react";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (searchVal) => {
    try {
      // Add small delay to debounce
      await new Promise((resolve) => setTimeout(resolve, 300));
      //

      const test = await fetch(
        `https://dummyjson.com/products/search?q=${searchVal}`,
        { signal }
      );

      const resp = await test.json();
      setData(resp?.products);
    } catch (e) {
      console.log(e);
    }
  };

  const onInputChange = useCallback(
    (e) => {
      setInputVal(e.target.value);
    },
    [setInputVal, fetchData]
  );

  const abortController = new window.AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    inputVal && fetchData(inputVal);
    return () => {
      if (signal && abortController.abort) {
        abortController.abort();
      }
    };
  }, [inputVal]);

  return (
    <div>
      <input type="text" value={inputVal} onChange={onInputChange} />
      <br />
      {data?.length > 0 && JSON.stringify(data[0])}
    </div>
  );
}
