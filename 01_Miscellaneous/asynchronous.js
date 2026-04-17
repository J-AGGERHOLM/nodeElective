//Javascript is single-threaded, everything runs in the main thread.
// That means we need no handle code that blocks the thread, my making heavy code pieces async callback functions

import { rejects } from "node:assert";
import { resolve } from "node:dns";

//examples of blocking operations
//network requests(fetch), database calls, file handling, hardware(server), user inputs,

//Solution 1: Callback functions

//Problem: callback hell, pyramid of doom

//Solution 2: Promises

//Promises can be in these states: pending, fulfilled
//the states can be in the states: resoved, rejected

new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      //throw "Oh no"
      resolve("Everything went well");
    } catch (error) {
      reject("oh no!");
    }
  }, 2000);
})
  .then((successMessage) => console.log(successMessage))
  .catch((errorMessage) => console.log(errorMessage));

/*
  
  */

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("yay!");
      } catch (error) {
        reject("OH NOO");
      }
    }, 3000);
  });
}

/*
myPromise()
.then((successMessage) => console.log(successMessage))
.then((errorMessage) => console.log(errorMessage));
*/
try {
  const successMessage = await myPromise();
  console.log(successMessage);
} catch (errorMessage) {
  console.log(errorMessage);
}
