// Event delegation is, instead of attaching event handlers to each and every child element or the HTML elements individually,
// we will attach an event directly to its parent element.
// So, due to event bubbling in JavaScript, this is possible, event delegation can be done.

// Pros;
// Code quality: We can improve our code quality and maintenance would be easy.

// Memory: Having more events in our code will take a lot of memory, and using event delegation we will save memory.

// Performance: The event delegation will improve the performance of the app.

// DOM manipulation: If we implement the event handlers on each and every child element and we have infinite scroll,
// then every time the child element gets added dynamically, the DOM will update every time.
// Using event delegation, DOM manipulation will be less.

// Cons:
// Not all events bubble up. There are some events that are not bubbled up like blur, focus, window resizing, or scrolling.
// In this case, using event delegation would be tough.

// The child stops propagation. Sometimes, HTML elements stop doing event propagation using stopPropagation().
// In this case, the event propagation will be stopped and will not be bubbled up in the hierarchy.

document.querySelector("#mainList").addEventListener("click", function (e) {
  console.log(e.target);
});
