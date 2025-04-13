// accordian
// accordion

// css
.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accordion {
  width: 500px;
  border: 5px solid;
  padding: 10px;
  background-color: skyblue;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.item {
  background-color: lightcyan;
  margin-bottom: 5px;
  padding: 10px 15px;
  border: 2px solid;
}

.icon {
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  background: none;
  border: none;
}

.content {
  display: none;
}

.show {
  display: block;
}


// code
export default function App() {
  const [isOpenedId, setIsOpenedId] = useState(null);
  const testData = [
    {
      name: "ABCD",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas quo soluta nulla aut dolorum eius modi tempore earum perspiciatis, totam ipsam incidunt voluptate dolore ipsa assumenda quisquam, dolores iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas quo soluta nulla aut dolorum eius modi tempore earum perspiciatis, totam ipsam incidunt voluptate dolore ipsa assumenda quisquam, dolores iste.",
    },
    {
      name: "MNOP",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas quo soluta nulla aut dolorum eius modi tempore earum perspiciatis, totam ipsam incidunt voluptate dolore ipsa assumenda quisquam, dolores iste.",
    },
    {
      name: "XYZ",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas quo soluta nulla aut dolorum eius modi tempore earum perspiciatis, totam ipsam incidunt voluptate dolore ipsa assumenda quisquam, dolores iste.",
    },
  ];

  const handleCLick = (idx) => {
    setIsOpenedId((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="App">
      <div className="accordion">
        {testData?.map((val, idx) => {
          return (
            <div className="item" key={idx}>
              <div className="title">
                <h3>{val.name}</h3>
                <button onClick={() => handleCLick(idx)} className="icon">
                  {isOpenedId === idx ? "-" : "+"}
                </button>
              </div>
              <div
                className={
                  isOpenedId === idx ? "show" : "content"
                }
              >
                {val.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
