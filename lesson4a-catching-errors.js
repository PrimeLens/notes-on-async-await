// https://github.com/mariusschulz
// https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await

const fetch = require('node-fetch');

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();
  // console.log('response.status ', response.status);
  if (response.status !== 200)
    throw Error(body.message);
  return body;
}

// Becasue the parent function is using promises we need to 
// throw the error manually in order to catch it

showGithubUser('xxxxxxxxx1234567')
  .then(user => {
    console.log(user.name);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });
