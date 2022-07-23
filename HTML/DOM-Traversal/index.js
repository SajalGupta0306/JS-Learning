// getElementById
const element = document.getElementById("element-id");

// getElementsByClassName: Returns all elements with specified class
const elements = document.getElementsByClassName("class-name");
const arr_list = Array.from(elements); // iterable list

// querySelector: returns first matching element with id or class
const singleElementWithId = document.querySelector("#id");
const singleElementWithClass = document.querySelector(".class");

// querySelectorAll: returns all elements matching with the same class
const allElementWithClass = document.querySelectorAll(".class"); // iterable list

// get All Children of the element
const parent = document.getElementById("element-id");
const children = parent.children;
const arr_children = Array.from(children); // iterable list

// skip all the children between parent and last child
const grandparent = document.getElementById("grandparent");
const childOne = grandparent.querySelector("#child-one"); // looks for the child with id: child-one under grandparent
const allChildren = grandparent.querySelectorAll(".child"); // looks for all the children with class: child under grandparent

// navigate to parent from children
const lastChild = document.getElementById("child");
const nextParent = lastChild.parentElement;

// navigate directly to specific parent with matching id/class
const lastChild1 = document.getElementById("child");
const closesParent = lastChild.closest(".parent"); // finds the closest parent with the matching id

// find next siblings
const childOne = document.getElementById("childOne");
const childTwo = childOne.nextElementSibling;

// find previous siblings
const childTwo = document.getElementById("childTwo");
const childOne = childOne.previousElementSibling;
