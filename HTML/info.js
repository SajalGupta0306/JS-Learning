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


