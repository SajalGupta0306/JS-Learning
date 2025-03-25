// Progress Indicator
// ProgressIndicator

// css

/* .valueIndicator {
  height: 40px;
  width: 400px;
  border: 1px solid;
  border-radius: 50px;
  margin: auto;
  background-color: silver;
} */

  .progessBar {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
  }
  


  // react

  const Rating = () => {
    const [value, setValue] = useState(0);
    
    const borderDesign = value ? "1px solid" : "none";
  
    const style = {
      width: `${value}%`,
      height: "40px",
      background: "red",
      borderRadius: "50px",
      border: borderDesign,
    };
  
    useEffect(() => {
      const myInterval = setInterval(() => {
        if (value === 0 || value === 100) {
          clearInterval(myInterval);
          return;
        }
        const newValue = value + 1;
        setValue(newValue);
      }, 50);
  
      return () => {
        clearInterval(myInterval);
      };
    }, [value]);
  
    const startDownload = () => {
      setValue(1);
    };
  
    return (
      <>
        <button onClick={startDownload}>Download</button>
        <div className="container">
          <div className="progessBar" style={style}>
            {value}
          </div>
        </div>
      </>
    );
  };