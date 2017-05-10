const fetch = require('node-fetch');

// AS AN ARROW FUNCTION
const showGithubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
}
/*
  iife a.k.a. immediate invoked function expression
*/

(async function(){
  const user = await showGithubUser('mariusschulz');
  console.log(user.name);
  console.log(user.location);
})();


