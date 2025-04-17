// react tab
// tab component

// css
.App {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tabs {
  display: flex;
  gap: 5px;
}

.tab {
  border: 1px solid;
  padding: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  cursor: pointer;
}

.activeTab {
  background-color: lightgray;
  border: 2px dashed;
}

.tab:hover {
  background-color: lightgray;
}

.content {
  border: 2px solid;
  height: 200px;
  padding: 20px;
}


// code
export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [initialData, setInitialData] = useState({
    name: "Sajal",
    age: 30,
    email: "sajal@gmail.com",
    interests: ["coding", "cricket"],
    theme: "dark",
  });

  const updateInitialData = (key, data) => {
    setInitialData((prev) => ({ ...prev, [key]: data }));
  };
  
  const tabs = [
    {
      name: "Profile",
      component: <Profile data={initialData} updateData={updateInitialData} />,
    },
    {
      name: "Interests",
      component: (
        <Interests data={initialData} updateData={updateInitialData} />
      ),
    },
    {
      name: "Settings",
      component: <Settings data={initialData} updateData={updateInitialData} />,
    },
  ];

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="App">
      <div className="tabs">
        {tabs.map((tab, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleTab(idx)}
              className={`tab ${activeTab === idx && "activeTab"} `}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="content">{tabs[activeTab].component}</div>
    </div>
  );
}
