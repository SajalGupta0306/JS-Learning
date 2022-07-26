import "./styles.css";
import useDetails from "./useDetails";

export default function App() {
  console.log(1);
  const data = useDetails();
  console.log(2);
  return (
    <>
      {console.log(3)}
      {data && (
        <div>
          Width of document is: {data.width} px
          <br />
          Height of document is: {data.height} px
        </div>
      )}
    </>
  );
}
