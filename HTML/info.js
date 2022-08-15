<meta name="viewport" content="width=device-width, initial-scale=1"></meta>;

// If you're using responsive design you need to tell the browser not to do that scaling.
// You can do that with a meta element in the head of the web page.

// The first one is width=device-width. This tells the browser to assume the width of the website is the same as the width of the device
// (instead of assuming the width of the website is 980 pixels).

// The second value is initial-scale=1. This tells the browser how much or how little scaling to do.
// With a responsive design, you don't want the browser to do any scaling at all.

innerHTML vs appendChild()
// (appendChild) does not cause a complete rebuild of the DOM or even all of the elements/nodes within the target.
// (innerHTML) does cause a complete rebuild of the content of the target element, which if you're appending is unnecessary.


<meta http-equiv="refresh" content="10" />
// refreshes the page automatically 10 seconds.
// content = value in seconds

// https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode
<!DOCTYPE html>
// In HTML documents, browsers use a DOCTYPE in the beginning of the document to decide whether to handle it in quirks mode or standards mode.
// If document type is not mentioned, browser will go to Quirks mode. 
// Quirks mode depends upon the web browser version, If is older version then this will not support HTML5 tags
// In HTML5, the only purpose of the DOCTYPE is to activate full standards mode

// Mainly 3 modes:
// 1. quirks mode -  In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. 
// This is essential in order to support websites that were built before the widespread adoption of web standards

// 2. almost standards mode - In almost standards mode, there are only a very small number of quirks implemented.

// 3. full standards mode -  In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications


// Document fragment
// The DocumentFragment interface represents a minimal document object that has no parent.
// It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. 
// The key difference is due to the fact that the document fragment isn't part of the active document tree structure. 
// Changes made to the fragment don't affect the document.

// <div id="main"></div>
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const element = document.createElement('div');
  element.innerText = "div " + (i + 1);
  //fragment.appendChild(element);
  document.getElementById("main").appendChild(element);
}


