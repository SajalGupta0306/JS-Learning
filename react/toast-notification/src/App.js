import "./App.css";
import { useState } from "react";

function App() {
  const [toast, setToast] = useState(false);

  const toastClick = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
    <div className="parent_div">
      <button onClick={() => toastClick()}>Open Toast</button>
      <br />
      {toast ? (
        <div className="toast_div">
          <label> Thank You!!!</label>
          {/* <button onClick={() => setToast(false)}>X</button> */}
        </div>
      ) : null}
    </div>
  );
}

export default App;
