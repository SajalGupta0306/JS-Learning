// otp input
// otpInput

// css
.App {
  font-family: sans-serif;
  text-align: center;
}

input {
  width: 50px;
  height: 50px;
  font-size: 40px;
  border: 1px solid;
  text-align: center;
}

// ccode
const Otp = ({ count }) => {
  const numberOfInputs = new Array(count).fill("");
  const [inputArr, setInputArr] = useState(numberOfInputs);
  const inputRef = useRef([]);

  // on page load, first input should have focus
  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleOnChange = (value, idx) => {
    const trimmedValue = value.trim();
    if (!trimmedValue || isNaN(trimmedValue)) {
      return;
    }

    // move the focus to next one after value is entered
    if (inputRef.current[idx + 1]) {
      inputRef.current[idx + 1]?.focus();
    }

    // taking only the last alphabaet
    const updatedValue = trimmedValue.slice(-1);
    const tempArr = [...inputArr];
    tempArr[idx] = updatedValue;
    setInputArr(tempArr);
  };

  // calling this function to detect backspace to clear input
  const handleKeyDOwn = (event, idx) => {
    const keyPressed = event.key;
    if (keyPressed === "Backspace") {
      const tempArr = [...inputArr];
      tempArr[idx] = "";
      setInputArr(tempArr);
      if (inputRef.current[idx - 1]) {
        inputRef.current[idx - 1]?.focus();
      }
    }
  };

  return (
    <>
      <h2>OTP Input</h2>
      {numberOfInputs.map((val, idx) => {
        return (
          <input
            ref={(input) => {
              inputRef.current[idx] = input;
            }}
            value={inputArr[idx]}
            key={idx}
            type={"text"}
            onChange={(e) => handleOnChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDOwn(e, idx)}
          />
        );
      })}
    </>
  );
};
