// https://javascript.info/localstorage

// both are part of web storage API provided by browser - temporary storage mechanism

// local storage
//  session storage

// Local storage: It stores data for current origin with no expiration date.
// Session storage: It stores data for one session and the data is lost when the browser tab is closed.

// LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened
// ( i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.

localStorage;
// Shared between all tabs and windows with the same origin (domain/port/url)
// Survives browser restart

sessionStorage;
// Visible within a browser tab, including iframes from the same origin
// Survives page refresh (but not tab close)

// Both storage objects provide same methods and properties:
// setItem(key, value) – store key/value pair.
// getItem(key) – get the value by key.
// removeItem(key) – remove the key with its value.
// clear() – delete everything.
// key(index) – get the key on a given position.
// length – the number of stored items.
