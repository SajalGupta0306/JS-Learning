import "./App.css";
import ExpandCollapse from "./ExpandCollapse";
const tempData = {
  id: 1,
  pid: null,
  children: [
    {
      id: 2,
      pid: 1,
      children: [
        {
          id: 4,
          pid: 2,
          children: [
            {
              id: 6,
              pid: 4,
              children: [
                {
                  id: 7,
                  pid: 6,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      pid: 1,
      children: [
        {
          id: 5,
          pid: 3,
        },
      ],
    },
  ],
};

function App() {
  return (
    <>
      <ExpandCollapse data={tempData} />
    </>
  );
}

export default App;
