import { useEffect, useState } from "react";
import { Timeout } from "./helper/timeout";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: Timeout(2).signal
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
