

/*
  Any function can be converted to an asynch function, lets look at 
  - function expressions
  - arrow functions
  - ES6 class methods
*/

const fetch = require('node-fetch');

// PREVIOUS LESSON WAS FUNCTION DECLARATION
// declaration is good because of the ability to use it before it is declared (function hoisting)
// async function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   const response = await fetch(url);
//   const user = await response.json();
//   return user;
// }

// AS A FUNCTION EXPRESSION
// const showGithubUser = async function(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   const response = await fetch(url);
//   const user = await response.json();
//   return user;
// }

// AS AN ARROW FUNCTION
const showGithubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
}


showGithubUser('mariusschulz')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  });



