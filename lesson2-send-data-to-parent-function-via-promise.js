// https://github.com/mariusschulz
// https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await



// Convert the previous asynch function 
// to send data back to a parent function via promise chain

const fetch = require('node-fetch');

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  // console.log(user.name);
  // console.log(user.location);
  return user;
  // could also combine by writing 
  // return await response.json();
}

  // an asynch function returns a promise
  // so the function call will need a .then()

showGithubUser('mariusschulz')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  });
