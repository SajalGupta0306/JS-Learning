
// redux: state management prcoess

// store : acts a source of truth of the  data for the entire UI
// it can hold, arrrays, objects, numbers, booleans etc

// store acts as a central place for interacting with actions and further communicating to reducer

// it cnnot be directly updated. The store needs to be passed as argument, the store is updated and then returned
// use spread operator for copying the reference
// or third party libraries: immutable.js pr immer.js


// reducer: takes in the current instance of store and returns updated state of the store
// It takes action as a second parameter which defines what action is done on the screen, so accordinly the store can be updated
// reducers are pure functions


// actions: plain JS object which represents what happened in the screen 


// steps to implement redux application
1. create a store
2. define actions
3. create reducer/s
4. set up the store


// working example:
// https://codesandbox.io/s/quirky-shadow-q11ksg?file=/src/components/Users.js
