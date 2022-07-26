import { useReducer, useState } from "react";
import "./styles.css";

export default function App() {
  // const SHOW_TOAST = "SHOW_TOAST";
  // const HIDE_TOAST = "HIDE_TOAST";

  // const initialState = {
  //   open: false,
  //   disable: false
  // };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case SHOW_TOAST:
  //       return { open: true, disable: true };
  //     case HIDE_TOAST:
  //       return { open: false, disable: false };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const btnClick = () => {
    setDisable(true);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setDisable(false);
    }, 2000);
  };

  return (
    <>
      <button disabled={disable} onClick={() => btnClick()}>
        Open Toast
      </button>
      {open && (
        <div className="parent">
          <p className="child">Opening Toast Message</p>
        </div>
      )}
    </>
  );

  // return (
  //   <>
  //     <div className="App">
  //       <button
  //         disabled={state.disable}
  //         onClick={() => {
  //           dispatch({ type: SHOW_TOAST });
  //           setTimeout(() => {
  //             dispatch({ type: HIDE_TOAST });
  //           }, 2000);
  //         }}
  //       >
  //         Open Toast
  //       </button>
  //     </div>
  //     {state.open && (
  //       <div className="parent">
  //         <p className="child">Opening Toast Message</p>
  //       </div>
  //     )}
  //   </>
  // );
}
