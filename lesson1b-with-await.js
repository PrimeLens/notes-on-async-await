// https://github.com/mariusschulz
// https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await


// using async await
// we can read statemens top to bottom without indentation
// no then methods in the promise chain
const fetch = require('node-fetch');

// adding 'async' converts the function to an asynchronous function
async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  // next use the 'await' operator to wait until the fetch call completes
  // it does this by receiving a promise which is the promise returned by fetch(url)
  // it pauses flow inside this function until the promise is settled, then either of 2 things happen
  // 1) if the promise is rejected the await expression throws the rejected value
  // 2) if the promise is resolved the await expression will returns the resolved value 
	//    which is assigned to the const response
  // there was a 2nd .then() in the previous example because the .json() method also returns a promise.
  // this means we can again use await to assign it to the const user
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}
showGithubUser('mariusschulz');