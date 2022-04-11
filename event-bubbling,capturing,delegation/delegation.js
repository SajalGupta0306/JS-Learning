// technique of handling events in DOM
// pros
// 1. saves memory by avoiding too much event listeners
// 2. helps to ease DOM manipulation

// cons
// 1. All the events are not bubbled up - blur, scroll etc
// 2. stopPropagation avoids event delegation

document.querySelector("#mainList").addEventListener("click", function (e) {
  console.log(e.target);
});
