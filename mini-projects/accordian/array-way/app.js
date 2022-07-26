import Component from "./Component";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: 1,
      name: "public",
      children: [
        {
          id: 4,
          name: "index.html",
          children: []
        }
      ]
    },
    {
      id: 2,
      name: "src",
      children: [
        {
          id: 5,
          name: "App.js",
          children: []
        },
        {
          id: 6,
          name: "Component.js",
          children: []
        },
        {
          id: 7,
          name: "index.js",
          children: []
        },
        {
          id: 8,
          name: "styles.css",
          children: []
        }
      ]
    },
    {
      id: 3,
      name: "package.json",
      children: []
    }
  ];
  return (
    <div className="App">
      {data.map((item, i) => {
        return <Component key={i} data={item}></Component>;
      })}
    </div>
  );
}
