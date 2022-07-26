import ExpandCollapse from "./ExpandCollapse";
import "./styles.css";

export default function App() {
  const tempData = {
    id: 1,
    pid: 0,
    name: "root",
    children: [
      {
        id: 2,
        pid: 1,
        name: "public",
        children: [
          {
            id: 4,
            pid: 2,
            name: "index.html"
          }
        ]
      },
      {
        id: 3,
        pid: 1,
        name: "src",
        children: [
          {
            id: 5,
            pid: 3,
            name: "App.js"
          },
          {
            id: 6,
            pid: 3,
            name: "index.js"
          }
        ]
      },
      {
        id: 3,
        pid: 1,
        name: "package.json"
      }
    ]
  };

  return (
    <div className="App">
      <h1>Expand-Collapse Example</h1>
      <ExpandCollapse data={tempData} />
    </div>
  );
}
