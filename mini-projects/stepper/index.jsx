// stepper
// progress stepper


// css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.stepper-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px;
}

.stepper-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.step {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
}

.step-number {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
}

.step-line {
  height: 2rem;
  width: 2px;
  background-color: grey;
  position: absolute;
  top: 2rem;
}

.active {
  background-color: blueviolet;
}

// code
export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const continueStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const backStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const steps = [
    {
      name: "Personal Info",
      content: <div>Personal Info Details</div>,
    },
    { name: "Account Info", content: <div>Account Info Details</div> },
    { name: "Educational Info", content: <div>Educational Info Details</div> },
    { name: "Voluntary Info", content: <div>Voluntary Info Details</div> },
  ];
  return (
    <>
      <div className="stepper-container">
        <div className="stepper">
          {steps.map((data, idx) => {
            return (
              <div key={idx} className="step">
                <div
                  className={`step-number ${currentStep >= idx && "active"} `}
                >
                  {idx + 1}
                  {idx < steps.length - 1 && (
                    <div
                      className={`step-line ${currentStep >= idx && "active"} `}
                    />
                  )}
                </div>
                <div className="step-name">{data.name}</div>
              </div>
            );
          })}
        </div>
        <div className="stepper-content">{steps[currentStep].content}</div>
      </div>
      <div className="stepper-buttons">
        {currentStep > 0 && (
          <button type="button" onClick={backStep}>
            Back
          </button>
        )}
        <button type="button" onClick={continueStep}>
          {currentStep === steps.length - 1 ? "Finish" : "Continue"}
        </button>
      </div>
    </>
  );
}
