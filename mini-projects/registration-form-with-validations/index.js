// https://www.youtube.com/watch?v=iyngFd6f8ko

// https://www.youtube.com/watch?v=vrFnwDJmvBk&list=PLpc_YvcwbxaTAg0cGvqcDVmALsipqtJDY&index=17

// email validation
// https://qawithexperts.com/article/javascript/email-validation-using-javascript-with-or-without-regex/317

const select = document.getElementsByTagName("select")[0];
const option = document.createElement("option");
option.text = "No Selection";
select.add(option);

async function getCountriesAndCreateOptions() {
  const response = await fetch("https://api.first.org/data/v1/countries");
  const { data } = await response.json();
  for (const key in data) {
    const value = data[key];
    const optionTag = document.createElement("option");
    optionTag.text = value.country;
    select.add(optionTag);
  }
}

getCountriesAndCreateOptions();

// form validation

const validateForm = (formId, callback) => {
  const formElement = document.querySelector(formId);

  const validationOptions = [
    {
      attribute: "minlength",
      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) =>
        `${label.textContent} needs to be minimum ${input.minLength} chars`,
    },
    {
      attribute: "data-email",
      isValid: (input) => {
        // check for @ sign
        const atSymbol = input.value.indexOf("@");
        if (atSymbol < 1) {
          return false;
        }
        // check for . sign and checks for 2 chars after @ symbol
        const dot = input.value.indexOf(".");
        if (dot <= atSymbol + 2) {
          return false;
        }
        // check that the dot is not at the end
        return dot !== input.value.length - 1;
      },
      errorMessage: (input, label) =>
        `${label.textContent} should be a valid email`,
    },
    {
      attribute: "match",
      isValid: (input) => {
        const matchSelector = input.getAttribute("match");
        const matchedElem = document.querySelector(`#${matchSelector}`);
        return (
          matchedElem && matchedElem?.value?.trim() === input?.value?.trim()
        );
      },
      errorMessage: (input, label) => {
        const matchSelector = input.getAttribute("match");
        const matchedElem = document.querySelector(`#${matchSelector}`);
        const matchedLabel =
          matchedElem.parentElement.parentElement.querySelector("label");
        return `${label.textContent} should match ${matchedLabel.textContent}`;
      },
    },
    {
      attribute: "required",
      isValid: (input) => input.value.trim() !== "",
      errorMessage: (input, label) => `${label.textContent} is required`,
    },

    // {
    //   attribute: 'custommaxlength',
    //   isValid: (input) =>
    //     input.value &&
    //     input.value.length <=
    //       parseInt(input.getAttribute('custommaxlength'), 10),
    //   errorMessage: (input, label) =>
    //     `${label.textContent} needs to be less than ${input.getAttribute(
    //       'custommaxlength'
    //     )} characters`,
    // },
    // {
    //   attribute: 'pattern',
    //   isValid: (input) => {
    //     const patternRegex = new RegExp(input.pattern);
    //     return patternRegex.test(input.value);
    //   },
    //   errorMessage: (input, label) =>
    //     `${label.textContent} should be a valid email`,
    // },
  ];

  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector("label");
    const input = formGroup.querySelector("input, textarea, select");
    const errorContainer = formGroup.querySelector(".error");

    let formGroupError = false;
    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
        input.classList.add("border-red");
        input.classList.remove("border-green");
        formGroupError = true;
      }
    }

    if (!formGroupError) {
      errorContainer.textContent = "";
      input.classList.add("border-green");
      input.classList.remove("border-red");
    }

    // for submitting
    // return !formGroupError;
  };

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = Array.from(formToValidate.querySelectorAll(".parent"));
    formGroups.forEach((formGroup) => {
      validateSingleFormGroup(formGroup);
    });

    // for submitting
    //return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
  };

  Array.from(formElement.elements).forEach((element) =>
    // use event = "input" for live change on each key press
    element.addEventListener("blur", (event) => {
      validateSingleFormGroup(event.srcElement.parentElement.parentElement);
    })
  );

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    validateAllFormGroups(formElement);

    // for submitting
    // const isFormValid = validateAllFormGroups(formElement);
    // if(isFormValid){
    // callback(formElement);
    //console.log("form is valid");
    // }
  });
};

const sendToApi = (formElement) => {
  const formObj = Array.from(formElement.elements)
    .filter((elem) => elem.type !== "submit")
    .reduce((acc, elem) => {
      return {
        ...acc,
        [elem.id]: elem.value,
      };
    }, {});
  console.log(formObj);
};

validateForm("#regForm");

// for submitting
validateForm("#regForm", sendToApi);
