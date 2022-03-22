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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Fetch vs Axios vs XHR vs Ajax

// 1. Fetch
// Based on promises rather than callbacks
// browser based API
(function(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(payload => payload.json())
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log('ERROR. Something went wrong.')
    })
})();

// 2. XHR - XMLHTTPRequest
// It uses the older JavaScript paradigm of binding callback handlers to a request object which get invoked based on success, failure and on-progress states
// browser based API
(function(){
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
  // This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status !== 200) { // status code should be "200" otherwise something went wrong.
      console.log('ERROR. Something went wrong.')
      return;
    }
    var payload = JSON.parse(xhr.response)
    console.log(payload);
  }
  xhr.onError = function() {
    console.log('Request failed')
  }
  xhr.send()
})();

// 3. AJAX
// jQuery based solution for making network requests in the browser.
// Similar to XHR, based on callback handlers
(function(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    type: 'GET',
    success: function(resp){ // success callback
      console.log(resp);
    },
    error: function(resp){ // Error callback
      console.log('ERROR. Something went wrong.')
    }
  })
})();

// 4. Axios
// Supports networks request from client side and server side
// Possible to use a library like Axios in the browser too using a bundler tool such as Webpack
