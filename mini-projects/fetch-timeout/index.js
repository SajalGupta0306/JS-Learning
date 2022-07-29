import { useEffect, useState } from "react";
import { Timeout } from "./helper/timeout";
import "./styles.css";

// Vanilla JS Code

const TimeoutFn = (time) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  signal: TimeoutFn(5).signal,
})
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

////////////////////////////////////////////////////////////////////////////////////

export default function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: Timeout(2).signal,
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((_) => setError(true));
    return () => {};
  }, []);
  return (
    <div>
      {error && <p>Your request timeout!</p>}
      {data && (
        <>
          <h1>ID: {data.id}</h1>
          <h2>TITLE: {data.title}</h2>
        </>
      )}
    </div>
  );
}
