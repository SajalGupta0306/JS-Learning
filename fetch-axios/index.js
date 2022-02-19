// fetch example
// POST: only passes the stringified data only
// url is not part of the request object

// Axios
// POST: can pass object directly
// url is part of the request object

// fetch: example POST
const url = "https://someurl.com";
const options = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    property_one: value_one,
    property_two: value_two,
  }),
};
const response = await fetch(url, options);
const responseOK = response && response.ok;
if (responseOK) {
  const data = await response.json();
  console.log(data);
  // do something with data
}

// fetch: example GET - default method is GET
const url1 = "https://someurl.com";
const response1 = await fetch(url1);
const responseOK1 = response && response.ok;
if (responseOK1) {
  const data = await response1.json();
  console.log(data);
  // do something with data
}

// axios: example POST
let url = "https://someurl.com";
let options = {
  method: "POST",
  url: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  data: {
    property_one: value_one,
    property_two: value_two,
  },
};
let response = await axios(options);
let responseOK =
  response && response.status === 200 && response.statusText === "OK";
if (responseOK) {
  let data = await response.data;
  // do something with data
}
